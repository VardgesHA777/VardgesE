import React from 'react';
import Typography from '@mui/material/Typography';

import { useLocation } from 'react-router-dom';
import { useAppState } from '../../../contexts/store';

const ListTitle = ({ title }: { title: string }) => {
  const { pathname } = useLocation();
  const { filterParams, totalElementsCount } = useAppState();
  const basePath = pathname.split('/')[1];

  return (
    <Typography component='h2' variant='h2'>
      {title} {filterParams?.[basePath] && totalElementsCount ? `(${totalElementsCount})` : ''}
    </Typography>
  );
};

export default ListTitle;
