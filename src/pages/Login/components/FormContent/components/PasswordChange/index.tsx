import React from 'react';
import { Button, Input } from '@landlord-tech/opp-ui-kit';
import { InputField } from '../../../../styles';
import { TPasswordChangeProps } from '../../../../types';

const PasswordChange = ({
  errors,
  values,
  touched,
  handleBlur = () => {},
  handleChange = () => {},
}: TPasswordChangeProps) => {
  return (
    <>
      <InputField>
        <Input
          type='password'
          value={values.password}
          name='password'
          placeholder='Enter Password'
          errorMessage={touched.password && errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label='New Password'
        />
      </InputField>
      <InputField>
        <Input
          type='password'
          value={values.confirmPassword}
          name='confirmPassword'
          placeholder='Confirm Password'
          errorMessage={touched.confirmPassword && errors.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          label='Confirm Password'
        />
      </InputField>
      <Button type='submit' text='Continue' />
    </>
  );
};

export default PasswordChange;
