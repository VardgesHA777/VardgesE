import React from 'react';
import { Button, Input } from '@landlord-tech/opp-ui-kit';
import PhoneInput from 'react-phone-input-2';
import { InputField, PhoneError, PhoneInputS, LabelS } from '../../../Login/styles';
import { FormContentProps } from '../../types';

const FormContent = ({
  resetStep,
  values,
  errors,
  touched,
  handleChange = () => {},
  handleBlur = () => {},
}: FormContentProps) => {
  const phoneHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };
  switch (resetStep) {
    case 'phoneNumber':
      return (
        <>
          <PhoneInputS>
            <LabelS>Phone number</LabelS>
            <PhoneInput
              inputProps={{
                name: 'phoneNumber',
              }}
              country='us'
              onBlur={handleBlur}
              onChange={(phone, countryDate, event) => phoneHandleChange(event)}
              containerStyle={{
                marginTop: 8,
                marginBottom: 28,
              }}
              inputStyle={{
                width: '100%',
              }}
            />
            {touched.phoneNumber && errors.phoneNumber && <PhoneError>Phone number is required</PhoneError>}
          </PhoneInputS>
          <Button type='submit' text='Continue' />
        </>
      );
    case 'passwordFill':
      return (
        <>
          <InputField>
            <Input
              type='text'
              value={values.code}
              name='code'
              errorMessage={touched.code && errors.code}
              placeholder='Code'
              label='Enter code'
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </InputField>
          <InputField>
            <Input
              type='password'
              value={values.password}
              name='password'
              placeholder='Enter Password'
              errorMessage={touched.password && errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
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
              onBlur={handleBlur}
              onChange={handleChange}
              label='Confirm Password'
            />
          </InputField>
          <Button type='submit' text='Continue' />
        </>
      );
    default:
      return null;
  }
};

export default FormContent;
