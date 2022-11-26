import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

import Typography from '@mui/material/Typography';
import { AnimalComplaintsList, TypographyS } from './style';
import { CartItem, IndividualInfoBlockLarge, InfoTitle } from '../../../../../../components/Base/style';
import { ViewBox, InfoTitleDate } from '../../../../../../components/Base/Propertie/style';
import IconButton from '../../../../../../components/Base/Buttons/IconButton';
import { useGetComplaints } from '../../../../../../Hooks/complaint';
import { useAppState } from '../../../../../../contexts/store';
import { NoListDataTypography } from '../../../../../PropertyView/components/Units/Unit/styles';

const AnimalComplaintList = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { profile } = useAppState();
  const { reFetch, data } = useGetComplaints();

  useEffect(() => {
    if (profile?.id) {
      reFetch({
        params: {
          maintainerId: profile.id,
          unitId: id,
        },
      });
    }
  }, [profile]);

  return (
    <AnimalComplaintsList>
      {(data || [])
        .sort((a: { creationDateTime: string }, b: { creationDateTime: string }) => {
          return a.creationDateTime < b.creationDateTime ? 1 : -1;
        })
        .map(
          (item: {
            id: string;
            docType: string;
            animalComplaintType: string;
            creationDateTime: string;
            createdUser: {
              type: string;
              photoUrl: string;
            };
          }) => {
            const openedBy = item.createdUser.type.charAt(0).toUpperCase() + item.createdUser.type.slice(1);
            return (
              <CartItem key={item.id}>
                <InfoTitleDate>Date - {moment(item.creationDateTime).format('MM/DD/YYYY')}</InfoTitleDate>
                <IndividualInfoBlockLarge>
                  <InfoTitle>Type of violation</InfoTitle>
                  <Typography component='h5' variant='h5'>
                    {item.animalComplaintType}
                  </Typography>
                </IndividualInfoBlockLarge>
                <IndividualInfoBlockLarge>
                  <InfoTitle>Status</InfoTitle>
                  <Typography component='h5' variant='h5'>
                    {item.docType}
                  </Typography>
                </IndividualInfoBlockLarge>
                <IndividualInfoBlockLarge display='flex' margin='0' justifyContent='space-between'>
                  <TypographyS component='h5' variant='h5' padding='8px 0 0 0'>
                    Opened by {openedBy}
                  </TypographyS>
                  <ViewBox>
                    <IconButton handleClick={() => history.push(`/animal-complaints/${item.id}`)}>View</IconButton>
                  </ViewBox>
                </IndividualInfoBlockLarge>
              </CartItem>
            );
          }
        )}
      {!data?.length && (
        <NoListDataTypography component='h5' variant='h5'>
          There are no animal complaints
        </NoListDataTypography>
      )}
    </AnimalComplaintsList>
  );
};

export default AnimalComplaintList;
