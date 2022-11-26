import React, { ReactNode } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Typography from '@mui/material/Typography';
import { InnerPageAuthS, Logo, TextField, AuthContent, Loading } from '../../../pages/Login/styles';
import logoIcon from '../../../assets/images/logo.svg';

type InnerPageAuthProps = {
  children: ReactNode;
  loading?: boolean;
  title?: string;
  text?: string;
  footer?: JSX.Element;
};

const InnerPageAuth = ({ title, text, children, footer, loading }: InnerPageAuthProps) => {
  return (
    <InnerPageAuthS>
      {loading && (
        <Loading>
          <CircularProgress />
        </Loading>
      )}
      <Logo>
        <img src={logoIcon} alt='Our Pet Policy' />
      </Logo>
      <div>
        <AuthContent>
          <Typography component='h2' variant='h2'>
            {title}
          </Typography>
          <TextField> {text} </TextField>
          {children}
        </AuthContent>
        {footer}
      </div>
    </InnerPageAuthS>
  );
};

export default InnerPageAuth;
