import React from 'react';
import Typography from '@mui/material/Typography';

import { AnimalDetailS, BaseImage } from '../../../../components/Base/style';
import { ImageName } from '../../style';
import ResidentInfo from './components/ResidentInfo';
import AnimalInfo from './components/AnimalInfo';
import AnimalImages from '../../AnimalImages';
import { IndividualAnimalData } from '../../../../types/types';

const AnimalDetail = ({ data }: { data: IndividualAnimalData }) => {
  const { name, petPhotoUrl, imageUrls } = data;
  return (
    <AnimalDetailS>
      <ImageName>
        <BaseImage>
          <img src={petPhotoUrl} alt='' />
        </BaseImage>
        <Typography component='h2' variant='h2'>
          {name}
        </Typography>
      </ImageName>
      <ResidentInfo
        rentalName={data.rentalName}
        rentalUnitNumber={data.rentalUnitNumber}
        applicationType={data.applicationType}
        tenantName={data.tenantName}
      />
      <AnimalInfo data={data} />
      <AnimalImages images={imageUrls} />
    </AnimalDetailS>
  );
};

export default AnimalDetail;
