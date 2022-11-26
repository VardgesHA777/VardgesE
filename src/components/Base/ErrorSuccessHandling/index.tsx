import React, { useEffect, ReactNode } from 'react';

import { Button } from '@landlord-tech/opp-ui-kit';
import { useAppState, useAppDispatch } from '../../../contexts/store';
import { ErrorHandlingWrapper, ErrorTitle } from './styles';
import SmtWentWrongImage from '../../../assets/images/smthWentWrong.png';
import SimpleAlert from '../Alert';
import noInternet from '../../../assets/images/noInternet.png';

const AlertHandling = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { error } = useAppState();
  const { alertData } = useAppState();
  const { status } = error || {};

  const backToHomePage = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    if (error) {
      dispatch({
        type: 'OPEN_ALERT',
        payload: {
          severity: 'error',
          message: error.message,
        },
      });
    }
  }, [error]);

  if (status) {
    if (status === 499) {
      return (
        <ErrorHandlingWrapper>
          <img src={noInternet} alt='' />
          <ErrorTitle>
            Oops.. <br /> no internet connection
          </ErrorTitle>
          <Button text='Try again' onClick={backToHomePage} />
        </ErrorHandlingWrapper>
      );
    }
    if (![400].includes(status)) {
      return (
        <ErrorHandlingWrapper>
          <img src={SmtWentWrongImage} alt='' />
          <ErrorTitle>
            Oops.. <br /> Something went wrong
          </ErrorTitle>
          <Button text='Homepage' onClick={backToHomePage} />
        </ErrorHandlingWrapper>
      );
    }
  }

  return (
    <>
      {children}
      {alertData && <SimpleAlert />}
    </>
  );
};

export default AlertHandling;
