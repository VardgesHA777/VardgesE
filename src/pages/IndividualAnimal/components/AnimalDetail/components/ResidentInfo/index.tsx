import React from 'react';
import Typography from '@mui/material/Typography';

import { ResidentInfoDataTypes } from '../../../../../../types/types';
import { BigTitle, Flex } from '../../../../style';
import { IndividualInfoBlock, InfoTitle } from '../../../../../../components/Base/style';

const ResidentInfo = ({ applicationType, rentalName, rentalUnitNumber, tenantName }: ResidentInfoDataTypes) => {
  return (
    <>
      <BigTitle component='h2' variant='h2'>
        Resident info
      </BigTitle>
      <Flex>
        <IndividualInfoBlock>
          <InfoTitle>Property name</InfoTitle>
          <Typography component='h5' variant='h5'>
            {rentalName || 'N/A'}
          </Typography>
        </IndividualInfoBlock>
        <IndividualInfoBlock width='45%'>
          <InfoTitle>Type of application</InfoTitle>
          <Typography component='h5' variant='h5'>
            {applicationType}
          </Typography>
        </IndividualInfoBlock>
      </Flex>
      <Flex>
        <IndividualInfoBlock>
          <InfoTitle>Unit number</InfoTitle>
          <Typography component='h5' variant='h5'>
            {rentalUnitNumber || 'N/A'}
          </Typography>
        </IndividualInfoBlock>
        <IndividualInfoBlock width='45%'>
          <InfoTitle>Tenant Name</InfoTitle>
          <Typography component='h5' variant='h5'>
            {tenantName}
          </Typography>
        </IndividualInfoBlock>
      </Flex>
    </>
  );
};

export default ResidentInfo;
