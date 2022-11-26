import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { UnitInfoS, UnitNumber } from '../../styles';
import { Flex } from '../../../IndividualAnimal/style';
import { IndividualInfoBlock, InfoTitle } from '../../../../components/Base/style';

const UnitInfo = ({ data }: { data: { address: string; propertyName: string } }) => {
  const {
    location: {
      state: { unitNumber },
    },
  } = useHistory() as { location: { state: { unitNumber: number } } };

  return (
    <UnitInfoS>
      <Flex justifyContent='unset'>
        <Typography component='h2' variant='h2'>
          Unit number:
        </Typography>
        <UnitNumber component='h2' variant='h2'>
          {unitNumber}
        </UnitNumber>
      </Flex>
      <Typography component='h5' variant='h5'>
        {data.propertyName}
      </Typography>
      <IndividualInfoBlock width='100%' margin='8px 0 0 0'>
        <InfoTitle>Address</InfoTitle>
        <Typography component='h5' variant='h5'>
          {data.address}
        </Typography>
      </IndividualInfoBlock>
    </UnitInfoS>
  );
};

export default UnitInfo;
