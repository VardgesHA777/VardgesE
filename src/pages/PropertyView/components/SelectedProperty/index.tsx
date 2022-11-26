import React from 'react';
import Typography from '@mui/material/Typography';
import propertyIcon from '../../../../assets/images/propertyIcon.svg';

import { ImageNameAddress, SelectedPropertyS, IndividualInfo, Address, NameAddress } from './style';
import { Flex } from '../../../IndividualAnimal/style';
import { InfoTitle, BaseImage } from '../../../../components/Base/style';
import { IndividualPropertyData } from '../../../../types/types';

type SelectedPropertyProps = {
  data?: IndividualPropertyData | null;
};

const SelectedProperty = ({ data }: SelectedPropertyProps) => {
  const { name, photoUrl, address1, unitCount, defaultPolicy } = data || {};

  return (
    <SelectedPropertyS>
      <ImageNameAddress>
        <BaseImage>
          <img src={photoUrl || propertyIcon} />
        </BaseImage>
        <NameAddress>
          <Typography component='h2' variant='h2'>
            {name}
          </Typography>
          <Address>{address1}</Address>
        </NameAddress>
      </ImageNameAddress>
      <Flex margin='0 0 8px 0'>
        <IndividualInfo>
          <InfoTitle>Number of units</InfoTitle>
          <Typography component='h5' variant='h5'>
            {unitCount}
          </Typography>
        </IndividualInfo>
        <IndividualInfo>
          <InfoTitle>Assigned policy</InfoTitle>
          <Typography component='h5' variant='h5'>
            {defaultPolicy?.name || 'N/A'}
          </Typography>
        </IndividualInfo>
      </Flex>
    </SelectedPropertyS>
  );
};

export default SelectedProperty;
