import React from 'react';
import Typography from '@mui/material/Typography';
import { HouseInformation, WholeField } from '../../styles';
import { IndividualInfoBlock, InfoTitle } from '../../../../components/Base/style';
import { Flex, AnimalComplaintBlockS } from '../../../IndividualAnimal/style';
import { IndividualComplaint } from '../../../../types/types';

const AnimalComplaintBlock = ({ data }: { data: IndividualComplaint }) => {
  const { address, rentalUnit, operatedBy } = data;

  const openedBy = operatedBy.charAt(0).toUpperCase() + operatedBy.slice(1);

  return (
    <AnimalComplaintBlockS>
      <Typography component='h2' variant='h2'>
        Animal complaint
      </Typography>
      <HouseInformation>
        <WholeField margin='0 0 16px 0'>
          <InfoTitle>Address</InfoTitle>
          <Typography component='h5' variant='h5'>
            {address}
          </Typography>
        </WholeField>
        <Flex>
          <IndividualInfoBlock>
            <InfoTitle>Rental unit</InfoTitle>
            <Typography component='h5' variant='h5'>
              {rentalUnit}
            </Typography>
          </IndividualInfoBlock>
          <IndividualInfoBlock>
            <InfoTitle>Opened by</InfoTitle>
            <Typography component='h5' variant='h5'>
              {openedBy}
            </Typography>
          </IndividualInfoBlock>
        </Flex>
      </HouseInformation>
    </AnimalComplaintBlockS>
  );
};

export default AnimalComplaintBlock;
