import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { Button, Input } from '@landlord-tech/opp-ui-kit';
import { TLoginProps } from '../../../../types';
import { InputField, PhoneInputS, PhoneError, LabelS } from '../../../../styles';
import 'react-phone-input-2/lib/style.css';

const LoginForm = ({ errors, values, touched, handleBlur = () => {}, handleChange = () => {} }: TLoginProps) => {
  const phoneHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };

  return (
    <>
      <PhoneInputS>
        <LabelS>Phone number</LabelS>
        <PhoneInput
          inputProps={{
            name: 'phoneNumber',
          }}
          country='us'
          onBlur={(e) =>
            setTimeout(() => {
              handleBlur(e);
            })
          }
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

      <InputField>
        <Input
          type='password'
          value={values.password}
          name='password'
          placeholder='Enter Password'
          errorMessage={touched.password && errors.password}
          onBlur={(e) =>
            setTimeout(() => {
              handleBlur(e);
            })
          }
          onChange={handleChange}
          label='Password'
        />
      </InputField>
      <Button type='submit' text='Login' />
    </>
  );
};

export default LoginForm;
