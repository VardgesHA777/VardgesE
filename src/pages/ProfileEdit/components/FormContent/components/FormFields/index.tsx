import React from 'react';
import { Input } from '@landlord-tech/opp-ui-kit';
import { PasswordFieldS } from '../../../../styles';
import { InputField } from '../../../../../Login/styles';
import { TPasswordEditFieldsError, TPasswordEditValues, TPasswordEditTouched } from '../../../../../Login/types';

type PasswordFieldsProps = {
  errors: TPasswordEditFieldsError;
  values: TPasswordEditValues;
  touched: TPasswordEditTouched;
  handleChange: any;
  handleBlur: (e: any) => void;
};

const PasswordFields = ({ handleChange, handleBlur, errors, values, touched }: PasswordFieldsProps) => {
  return (
    <PasswordFieldS>
      <InputField>
        <Input
          type='password'
          value={values.currentPassword}
          errorMessage={(touched.currentPassword && errors.currentPassword) as string}
          name='currentPassword'
          placeholder='*************'
          label='Current Password'
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputField>
      <InputField>
        <Input
          type='password'
          value={values.password}
          errorMessage={(touched.password && errors.password) as string}
          name='password'
          placeholder='*************'
          label='New Password'
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputField>
      <InputField>
        <Input
          type='password'
          value={values.confirmPassword}
          errorMessage={(touched.confirmPassword && errors.confirmPassword) as string}
          name='confirmPassword'
          placeholder='*************'
          label='Confirm Password'
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputField>
    </PasswordFieldS>
  );
};

export default PasswordFields;
