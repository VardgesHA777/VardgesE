import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  BackToLogin,
  NotReceivedCode,
  ResendCodeLink,
  ResetLink,
  ResetPasswordReminder,
  TextField,
} from '../../../Login/styles';
import { FooterProps } from '../../types';

const Footer = ({ phoneNumberValidation, phoneNumberLocal, resetStep, error }: FooterProps) => {
  const history = useHistory();
  const [resendCodeTimer, setResentCodeTimer] = useState(0);

  useEffect(() => {
    if (resendCodeTimer) {
      const timer = setTimeout(() => {
        setResentCodeTimer(resendCodeTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCodeTimer]);

  const resendCode = async () => {
    const response = await phoneNumberValidation(phoneNumberLocal);
    if (response) {
      setResentCodeTimer(60);
    }
  };

  return (
    <ResetPasswordReminder>
      {resetStep === 'passwordFill' && (
        <NotReceivedCode>
          {!resendCodeTimer && <TextField>Dont receive the code? &nbsp;</TextField>}
          <ResendCodeLink onClick={!resendCodeTimer ? resendCode : () => {}}>
            {resendCodeTimer ? `Resend the code will be active in ${resendCodeTimer}` : `Resend the code`}
          </ResendCodeLink>
        </NotReceivedCode>
      )}
      <BackToLogin>
        <TextField>Or go back to &nbsp;</TextField>
        <ResetLink onClick={() => history.push('/')}>login page</ResetLink>
      </BackToLogin>
    </ResetPasswordReminder>
  );
};

export default Footer;
