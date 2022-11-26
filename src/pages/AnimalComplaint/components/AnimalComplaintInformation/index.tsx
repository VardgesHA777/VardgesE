import React from 'react';
import Typography from '@mui/material/Typography';
import moment from 'moment';

import { AnimalViolation, WholeField, AnimalComplaintInformationS } from '../../styles';
import { InfoTitle } from '../../../../components/Base/style';
import Comments from '../Comments';
import AnimalImages from '../../../IndividualAnimal/AnimalImages';
import { IndividualComplaintInfo } from '../../../../types/types';

const AnimalComplaintInformation = ({ data }: { data: IndividualComplaintInfo }) => {
  const { createdDate, photos, message, status, complaintType } = data;
  return (
    <AnimalViolation>
      <AnimalComplaintInformationS>
        <Typography component='h2' variant='h2'>
          Animal complaint information
        </Typography>
        <WholeField margin='10px 0 16px 0'>
          <InfoTitle>Type of the animal complaint</InfoTitle>
          <Typography component='h5' variant='h5'>
            {complaintType}
          </Typography>
        </WholeField>
        <WholeField margin='0 0 16px 0'>
          <InfoTitle>Status</InfoTitle>
          <Typography component='h5' variant='h5'>
            {status}
          </Typography>
        </WholeField>
        <WholeField margin='0 0 16px 0'>
          <InfoTitle>Date created</InfoTitle>
          <Typography component='h5' variant='h5'>
            {moment(createdDate).format('MM/DD/YYYY')}
          </Typography>
        </WholeField>
        {message && (
          <WholeField margin='0 0 16px 0'>
            <InfoTitle>Added message</InfoTitle>
            <Typography component='h5' variant='h5'>
              {message}
            </Typography>
          </WholeField>
        )}
        {!!photos.length && (
          <WholeField>
            <AnimalImages className='complaint-images' images={photos} />
          </WholeField>
        )}

        {/* <Comments /> */}
        {/* <AddComment /> */}
      </AnimalComplaintInformationS>
    </AnimalViolation>
  );
};

export default AnimalComplaintInformation;
