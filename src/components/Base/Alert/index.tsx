import React, { useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@landlord-tech/opp-ui-kit';
import { WarningIcon, WarningFilledIcon } from '../Icons/Icons';
import { useAppDispatch, useAppState } from '../../../contexts/store';
import { SimpleAlertS, SAlert } from './styles';

const SimpleAlert = () => {
  const dispatch = useAppDispatch();
  const { alertData } = useAppState();

  const { severity, message } = alertData;

  useEffect(() => {
    if (!message) {
      return;
    }
    const hideAlert = setTimeout(() => {
      dispatch({
        type: 'CLOSE_ALERT',
      });
      if (severity) {
        dispatch({
          type: 'SET_ERROR',
          payload: null,
        });
      }
    }, 5000);
    return () => clearTimeout(hideAlert);
  }, [message, dispatch]);

  function renderAlertIcon(severity: string) {
    switch (severity) {
      case 'warning':
        return <WarningFilledIcon />;
      case 'error':
        return <WarningIcon />;
      default:
        return null;
    }
  }

  const closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  return (
    <SimpleAlertS className={severity === 'success' ? 'success-alert' : ''}>
      <Collapse in={!!message} timeout='auto'>
        <SAlert
          severity={severity}
          icon={renderAlertIcon(severity)}
          action={
            <div aria-label='close' className='close' onClick={closeAlert}>
              <CloseIcon fontSize='inherit' />
            </div>
          }
        >
          {message}
        </SAlert>
      </Collapse>
    </SimpleAlertS>
  );
};

export default SimpleAlert;
