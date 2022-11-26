import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { IndividualItemS, AnimalNameUnitNumber, InfoField, ColorsTypography } from './style';
import { BaseImage, InfoTitle } from '../../../../components/Base/style';
import { ViewBox } from '../../../../components/Base/Propertie/style';
import IconButton from '../../../../components/Base/Buttons/IconButton';
import { Flex } from '../../../IndividualAnimal/style';
import { AnimalsContentTypes } from '../../../../types/types';
import { RoutesNames } from '../../../../routes/RoutesNames';
import animalIcon from '../../../../assets/images/animalIcon.svg';

const IndividualAnimal = ({ item, unitAnimal }: { item: AnimalsContentTypes; unitAnimal?: boolean }) => {
  const history = useHistory();
  const { name, type, petPhotoUrl, id, propertyId, rentalUnit, rentalName, colors, tenantName } = item;

  return (
    <IndividualItemS flexDirection='column'>
      <Flex margin='0 0 10px 0' justifyContent='flex-start'>
        <BaseImage>
          <img src={petPhotoUrl || animalIcon} alt='' />
        </BaseImage>
        <Typography className='animal-name' component='h4' variant='h4'>
          {name}
        </Typography>
      </Flex>
      <Flex margin='0 0 10px 0'>
        <AnimalNameUnitNumber>
          <Flex margin='0' justifyContent='flex-start'>
            <InfoField>
              <InfoTitle>Type of animal</InfoTitle>
              <Typography component='h5' variant='h5'>
                {type || 'N/A'}
              </Typography>
            </InfoField>
            <InfoField>
              <InfoTitle>Tenant name</InfoTitle>
              <Typography component='h5' variant='h5'>
                {tenantName || 'N/A'}
              </Typography>
            </InfoField>
          </Flex>
        </AnimalNameUnitNumber>
      </Flex>
      {!unitAnimal && (
        <>
          <Flex margin='0 0 20px 0' justifyContent='flex-start'>
            <InfoField>
              <InfoTitle>Property name</InfoTitle>
              <Typography component='h5' variant='h5'>
                {rentalName || 'N/A'}
              </Typography>
            </InfoField>
          </Flex>
          <Flex margin='0 0 10px 0' justifyContent='flex-start'>
            <InfoField>
              <InfoTitle>Unit number</InfoTitle>
              <Typography component='h5' variant='h5'>
                {rentalUnit || 'N/A'}
              </Typography>
            </InfoField>
          </Flex>
        </>
      )}

      <InfoField width='100%'>
        <InfoTitle>Color</InfoTitle>
        <ColorsTypography component='h5' variant='h5'>
          {colors?.join(', ') || 'N/A'}
        </ColorsTypography>
      </InfoField>
      <ViewBox>
        <IconButton
          handleClick={() =>
            history.push({
              pathname: `${RoutesNames.animals}/${id}`,
              state: { unitNumber: item.rentalUnitNumber, propertyId },
            })
          }
        >
          View
        </IconButton>
      </ViewBox>
    </IndividualItemS>
  );
};

export default IndividualAnimal;
