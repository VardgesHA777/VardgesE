import React, { useContext } from 'react';
import { Button } from '@landlord-tech/opp-ui-kit';
import { ButtonsSectionWrapper } from '../styles';
import { VersionContext } from '../../../../../../../contexts/Version';

const ButtonsGroup = () => {
  const { handleCheckNewVersion } = useContext(VersionContext);
  return (
    <ButtonsSectionWrapper>
      <Button text='Check for update' className='update-btn' onClick={handleCheckNewVersion} />
    </ButtonsSectionWrapper>
  );
};

export default ButtonsGroup;
