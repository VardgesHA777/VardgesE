import React, { useEffect, useState } from 'react';
import Amplify from 'aws-amplify';
import { useHistory } from 'react-router-dom';

import InnerPageAuth from '../../components/Base/InnerPageAuth';
import FormContent from './components/FormContent';
import { UseForm } from '../../components/useForm';
import { TextField, AuthReminder, ResetLink, ErrorMessage } from './styles';
import { TError } from './types';
import { validationSchema } from './validationSchema';
import { RoutesNames } from '../../routes/RoutesNames';
import awsExports from '../../aws-exports';
import { User } from '../../shared/Storage';
import { useTemporaryPasswordChecking, useCompleteNewPassword } from '../../Hooks/maintainerAWS';
import { useGetUser } from '../../Hooks/user';
import { userTypes, notAllowedUserLoginText } from '../../shared/enum';
import { useAppDispatch } from '../../contexts/store';

Amplify.configure(awsExports);

enum validationSchemaEnum {
  passwordChange = 'passwordChange',
  login = 'login',
}

const Login = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [authStep, setAuthStep] = useState(validationSchemaEnum.login);
  const [loading, setLoading] = useState(false);
  const {
    errors,
    values,
    handleBlur,
    touched,
    handleSubmit: handleFormSubmit,
    handleChange,
    resetForm,
  } = UseForm({
    initialValues: { confirmPassword: '', password: '', phoneNumber: '' },
    onSubmit: (val: any) => handleSubmit(val),
    validationSchema: validationSchema[authStep],
    validateOnChange: false,
  });

  const {
    data,
    reFetch,
    error: passwordCheckingError,
    setError,
  } = useTemporaryPasswordChecking(
    () => {
      setLoading(false);
      resetForm();
      setAuthStep(validationSchemaEnum.passwordChange);
    },
    () => {
      setLoading(false);
    }
  );

  const {
    reFetch: completePassword,
    error,
    setError: setCompleteNewPasswordError,
  } = useCompleteNewPassword(() => {
    setAuthStep(validationSchemaEnum.login);
  });

  const { reFetch: reFetchGetUser } = useGetUser((userData) => {
    dispatch({
      type: 'SET_PROFILE',
      payload: userData,
    });
    const {
      customAttributes: { showIntro },
    } = userData;
    if (showIntro === 'true') {
      return history.push(RoutesNames.intro);
    }
    return history.push(RoutesNames.properties);
  });

  const errorMessage = passwordCheckingError || error;

  useEffect(() => {
    if (errorMessage) {
      setError(null);
      setCompleteNewPasswordError(null);
    }
  }, [values]);

  const logIn = async (phoneNumber: string, password: string) => {
    const response = (await reFetch({ phoneNumber: phoneNumber.replace(/[- )(]/g, ''), password })) as any;
    const user = {
      attributes: response.attributes,
      signInUserSession: response.signInUserSession,
    };
    if (response.attributes['custom:userType'] !== userTypes.maintainer) {
      dispatch({
        type: 'OPEN_ALERT',
        payload: {
          message: notAllowedUserLoginText,
          severity: 'error',
        },
      });
      return setLoading(false);
    }
    User.set(user);
    if (response) {
      await reFetchGetUser();
    }
    return setLoading(false);
  };

  const handleSubmit = async (values: { phoneNumber?: string; password: string }) => {
    const { phoneNumber = '', password = '' } = values;
    setLoading(true);
    setCompleteNewPasswordError(null);
    setError(null);
    if (authStep !== validationSchemaEnum.passwordChange) {
      return logIn(phoneNumber, password);
    }
    await completePassword({ data, password });
    return setLoading(false);
  };

  const Footer = () => {
    return (
      <AuthReminder>
        <TextField>Forgot password? &nbsp;</TextField>
        <ResetLink onClick={() => history.push(RoutesNames.resetPassword)}>Reset it here</ResetLink>
      </AuthReminder>
    );
  };

  return (
    <InnerPageAuth
      loading={loading}
      title='Welcome to the Pet Mapping Tool'
      text='Please enter the phone number associated with your Pet Mapping invite and enter a password to get started.'
      footer={<Footer />}
    >
      <form onSubmit={handleFormSubmit}>
        <FormContent
          values={values}
          touched={touched}
          authStep={authStep}
          errors={errors as TError}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </form>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InnerPageAuth>
  );
};

export default Login;
