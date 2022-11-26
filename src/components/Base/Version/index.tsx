import React, { FC } from 'react';
import { VersionFooter } from './styles';

const VersionWrapper: FC = () => {
  return <VersionFooter>version {process.env.REACT_APP_VERSION}</VersionFooter>;
};

export default VersionWrapper;
