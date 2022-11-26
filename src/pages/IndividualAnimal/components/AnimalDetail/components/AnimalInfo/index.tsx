import React from 'react';
import Typography from '@mui/material/Typography';
import moment from 'moment';

import { AnimalTitle, Flex } from '../../../../style';
import { IndividualInfoBlock, IndividualInfoBlockLarge, InfoTitle } from '../../../../../../components/Base/style';
import { IndividualAnimalData } from '../../../../../../types/types';

const dateFormat = 'MM/DD/YYYY';

const getAge = (age: number, ageUnit: string) => {
  if (ageUnit === 'YEARS') {
    return `${age} years`;
  }
  if (age < 12) {
    return `${age} months`;
  }
  return `${Math.floor(age / 12)} years ${age % 12} months`;
};

const AnimalInfo = ({
  data: { type, color, breed, gender, age, ageUnit, weight, expirationDate, vaccinatedDate, houseTrained },
}: {
  data: IndividualAnimalData;
}) => {
  return (
    <>
      <AnimalTitle component='h2' variant='h2'>
        Animal info
      </AnimalTitle>
      <Flex>
        <IndividualInfoBlock>
          <InfoTitle>Type</InfoTitle>
          <Typography component='h5' variant='h5'>
            {type}
          </Typography>
        </IndividualInfoBlock>
        <IndividualInfoBlock width='45%'>
          <InfoTitle>Color</InfoTitle>
          <Typography component='h5' variant='h5'>
            {color?.join(', ')}
          </Typography>
        </IndividualInfoBlock>
      </Flex>
      <Flex>
        <IndividualInfoBlock>
          <InfoTitle>Breed</InfoTitle>
          <Typography component='h5' variant='h5'>
            {breed}
          </Typography>
        </IndividualInfoBlock>
        <IndividualInfoBlock width='45%'>
          <InfoTitle>Gender</InfoTitle>
          <Typography component='h5' variant='h5'>
            {gender}
          </Typography>
        </IndividualInfoBlock>
      </Flex>
      <Flex>
        <IndividualInfoBlock>
          <InfoTitle>Age</InfoTitle>
          <Typography component='h5' variant='h5'>
            {getAge(age, ageUnit)}
          </Typography>
        </IndividualInfoBlock>
        <IndividualInfoBlock width='45%'>
          <InfoTitle>Weight (lbs)</InfoTitle>
          <Typography component='h5' variant='h5'>
            {weight}
          </Typography>
        </IndividualInfoBlock>
      </Flex>
      <IndividualInfoBlockLarge>
        <InfoTitle>Rabies vaccination expiration date</InfoTitle>
        <Typography component='h5' variant='h5'>
          {moment(expirationDate, 'YYYY-MM-DD').format(dateFormat)}
        </Typography>
      </IndividualInfoBlockLarge>
      <IndividualInfoBlockLarge>
        <InfoTitle>Rabies vaccination given date</InfoTitle>
        <Typography component='h5' variant='h5'>
          {moment(vaccinatedDate, 'YYYY-MM-DD').format(dateFormat)}
        </Typography>
      </IndividualInfoBlockLarge>
      <IndividualInfoBlockLarge>
        <InfoTitle>Is the animal house trained?</InfoTitle>
        <Typography component='h5' variant='h5'>
          {houseTrained}
        </Typography>
      </IndividualInfoBlockLarge>
    </>
  );
};

export default AnimalInfo;
