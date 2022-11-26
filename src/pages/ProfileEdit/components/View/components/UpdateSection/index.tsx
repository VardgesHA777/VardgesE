import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { InfoTitle, UpdateSectionWrapper } from './styles';
import ButtonsGroup from './components/ButtonsGroup';
import { VersionContext } from '../../../../../../contexts/Version';

const UpdateSection = () => {
  const { newVersionAvailable, versionLastCheckDate } = useContext(VersionContext);

  return (
    <UpdateSectionWrapper>
      <Typography component='h2' variant='h2'>
        App update
      </Typography>
      {newVersionAvailable && <InfoTitle>New version available</InfoTitle>}
      {versionLastCheckDate && <InfoTitle>Last checked {versionLastCheckDate}</InfoTitle>}
      <ButtonsGroup />
    </UpdateSectionWrapper>
  );
};

export default UpdateSection;
