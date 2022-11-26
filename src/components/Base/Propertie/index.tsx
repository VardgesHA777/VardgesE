import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { NameImage, ViewBox, PropertyNumberPart, IndividualInfo, PropertieList } from './style';
import { InfoTitle, CartItem, MediumImage } from '../style';
import { PropertiesTypes } from '../../../types/types';
import propertyIcon from '../../../assets/images/propertyIcon.svg';
import { RoutesNames } from '../../../routes/RoutesNames';

import { useGetProperties } from '../../../Hooks/rental';
import { useAppState } from '../../../contexts/store';
import LoadMoreItems from '../LoadMoreItems';
import ListTitle from '../ListTitle';
import IconButton from '../Buttons/IconButton';

const Properties = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { profile, contentItems } = useAppState();
  const basePath = pathname.split('/')[1];

  return (
    <>
      {profile && <ListTitle title={`${profile.fullName}'s Properties`} />}
      <PropertieList>
        <LoadMoreItems hook={useGetProperties} paramsName={basePath} noDataText='There are no properties yet.'>
          {contentItems?.map((item: PropertiesTypes) => {
            return (
              <CartItem key={item.id}>
                <NameImage>
                  <MediumImage>
                    <img src={item.photoUrl || propertyIcon} alt='' />
                  </MediumImage>
                  <Typography component='h4' variant='h4'>
                    {item.name}
                  </Typography>
                </NameImage>
                <div>
                  <InfoTitle>Address</InfoTitle>
                  <Typography component='h5' variant='h5'>
                    {item.address}
                  </Typography>
                </div>
                <PropertyNumberPart>
                  <IndividualInfo>
                    <InfoTitle>Property type</InfoTitle>
                    <Typography component='h5' variant='h5'>
                      {item.type}
                    </Typography>
                  </IndividualInfo>
                  <IndividualInfo>
                    <InfoTitle>Number of units</InfoTitle>
                    <Typography component='h5' variant='h5'>
                      {item.unit}
                    </Typography>
                  </IndividualInfo>
                </PropertyNumberPart>
                <ViewBox>
                  <IconButton
                    handleClick={() =>
                      history.push({
                        pathname: `${RoutesNames.properties}/${item.id}`,
                        state: { propertyId: item.id },
                      })
                    }
                  >
                    View
                  </IconButton>
                </ViewBox>
              </CartItem>
            );
          })}
        </LoadMoreItems>
      </PropertieList>
    </>
  );
};

export default Properties;
