import React from 'react';

import { Typography } from '@mui/material';
import { CloseIcon } from '../Icons/Icons';
import { ModalDialog, Close, Header } from './styles';

type ModalProps = {
  open: boolean;
  title: string;
  handleClose: () => void;
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const Modal = ({ open, handleClose, title, className, children }: ModalProps) => {
  return (
    <ModalDialog open={open} className={className}>
      <Header>
        <Typography component='h2' variant='h2'>
          {title}
        </Typography>
        <Close onClick={handleClose}>
          <CloseIcon />
        </Close>
      </Header>
      {children}
    </ModalDialog>
  );
};

export default Modal;
