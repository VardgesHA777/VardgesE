import React from 'react';

import { Typography } from '@mui/material';
import { CloseIcon } from '../Icons/Icons';
import { SModalDialog, Close, Header, ContentContainer } from './styles';

type ModalProps = {
  open: boolean;
  title?: string;
  handleClose: () => void;
  children: JSX.Element | JSX.Element[];
};

const Modal = ({ open, handleClose, title, children }: ModalProps) => {
  return (
    <SModalDialog open={open} onClose={handleClose}>
      <Header>
        {!!title && (
          <Typography component='h5' variant='h5'>
            {title}
          </Typography>
        )}
        <Close onClick={handleClose}>
          <CloseIcon />
        </Close>
      </Header>
      <ContentContainer>{children}</ContentContainer>
    </SModalDialog>
  );
};

export default Modal;
