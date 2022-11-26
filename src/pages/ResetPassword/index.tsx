import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import FormContent from './components/FormContent';
import InnerPageAuth from '../../components/Base/InnerPageAuth';
import { UseForm } from '../../components/useForm';
import { validationSchema } from './validationSchema';
import { ErrorMessage } from '../Login/styles';
import Footer from './components/Footer';
import { usePhoneNumberValidation, useForgotPasswordValidation } from '../../Hooks/maintainerAWS';

enum validationSchemaEnum {
  passwordFill = 'passwordFill',
  phoneNumber = 'phoneNumber',
}

const ResetPassword = () => {
  const history = useHistory();
  const [resetStep, setResetStep] = useState(validationSchemaEnum.phoneNumber);
  const [loading, setLoading] = useState(false);
  const [phoneNumberLocal, setPhoneNumberLocal] = useState('');

  const {
    reFetch,
    loading: phoneNumberValidationLoading,
    error,
    setError,
  } = usePhoneNumberValidation(() => {
    setResetStep(validationSchemaEnum.passwordFill);
  });

  const {
    reFetch: checkForgotPassword,
    error: errorForgotPassword,
    setError: setForgotPasswordError,
  } = useForgotPasswordValidation(() => {
    history.push('/');
  });

  const phoneNumberValidation = async (phoneNumber: string): Promise<boolean> => {
    const response = await reFetch({ phoneNumber });
    setPhoneNumberLocal(phoneNumber);
    return !!response;
  };

  const errorMessage = error || errorForgotPassword;

  const handleSubmit = async (values: { code?: string; phoneNumber?: string; password?: string }) => {
    const { phoneNumber = '', code = '', password = '' } = values;
    setLoading(true);
    setForgotPasswordError(null);
    setError(null);
    if (resetStep === validationSchemaEnum.phoneNumber) {
      resetForm();
      await phoneNumberValidation(phoneNumber.replace(/[- )(]/g, ''));
    } else {
      await checkForgotPassword({ phoneNumber: phoneNumberLocal, code, password });
    }
    return setLoading(false);
  };

  const {
    errors,
    values,
    touched,
    handleBlur,
    resetForm,
    handleSubmit: handleFormSubmit,
    handleChange,
  } = UseForm({
    initialValues: { code: '', phoneNumber: '', password: '', confirmPassword: '' },
    onSubmit: (val: { code?: string; phoneNumber?: string; password?: string }) => handleSubmit(val),
    validationSchema: validationSchema[resetStep],
    validateOnChange: false,
  });

  useEffect(() => {
    setError(null);
    setForgotPasswordError(null);
  }, [values]);

  return (
    <InnerPageAuth
      loading={loading || phoneNumberValidationLoading}
      title='Reset Password'
      text='We will send a password reset code to the phone number associated with your account.'
      footer={
        <Footer
          error={error}
          resetStep={resetStep}
          phoneNumberValidation={phoneNumberValidation}
          phoneNumberLocal={phoneNumberLocal}
        />
      }
    >
      <form onSubmit={handleFormSubmit}>
        <FormContent
          touched={touched}
          resetStep={resetStep}
          errors={errors}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </form>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InnerPageAuth>
  );
};

export default ResetPassword;
