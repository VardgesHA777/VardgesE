import React, { useContext } from 'react';
import { Button } from '@landlord-tech/opp-ui-kit';
import { ButtonsSectionWrapper } from '../styles';
import { TButtonsGroupProps } from '../types';

const ButtonsGroup = ({ handleUpdate, handleClose }: TButtonsGroupProps) => {
  return (
    <ButtonsSectionWrapper>
      <Button text='Close' className='close-btn' onClick={handleClose} />
      <Button text='Update' className='update-btn' onClick={handleUpdate} />
    </ButtonsSectionWrapper>
  );
};

export default ButtonsGroup;
