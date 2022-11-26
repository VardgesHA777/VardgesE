import React from 'react';

import LoginForm from './components/LoginForm';
import PasswordChange from './components/PasswordChange';
import { TFormContentProps } from '../../types';

const FormContent = ({
  authStep,
  errors,
  values,
  touched,
  handleBlur = () => {},
  handleChange = () => {},
}: TFormContentProps) => {
  switch (authStep) {
    case 'passwordChange':
      return (
        <PasswordChange
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    case 'login':
      return (
        <LoginForm
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    default:
      return null;
  }
};

export default FormContent;
