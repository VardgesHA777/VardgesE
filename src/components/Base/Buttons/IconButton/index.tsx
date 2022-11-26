import React from 'react';
import { SButton } from './style';
import { ViewIcon } from '../../Icons/Icons';
import { TIconButtonProps } from './types';

const IconButton = ({
  variant = 'contained',
  reverse = false,
  textColor = '#0d0d0d',
  bgColor,
  margin,
  handleClick,
  Icon,
  children,
  ...props
}: TIconButtonProps) => {
  return (
    <SButton
      onClick={handleClick}
      variant={variant}
      textColor={textColor}
      bgColor={bgColor}
      margin={margin}
      startIcon={reverse ? Icon || <ViewIcon color={textColor} /> : undefined}
      endIcon={reverse ? undefined : Icon || <ViewIcon color={textColor} />}
      {...props}
    >
      {children}
    </SButton>
  );
};

export default IconButton;
