import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import profileIcon from '../../../assets/images/profileIcon.svg';
import { RoutesNames } from '../../../routes/RoutesNames';
import { useAppState } from '../../../contexts/store';
import { ArrowTopIcon } from '../Icons/Icons';

import { HeaderS, UserImage } from './styles';

type HeaderProps = {
  userImage: string;
};

const pageNames: { [key: string]: string } = {
  animals: 'Animals',
  properties: 'Properties',
  settings: 'Settings',
};

const individualPageNames: { [key: string]: string } = {
  animals: 'Animal details',
  properties: 'Property details',
  units: 'Unit details',
  'animal-complaints': 'Animal complaint details',
};

const Header = ({ userImage }: HeaderProps) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { userUpdatedPhotoUrl } = useAppState();
  const { id } = useParams<{ id: string }>();
  const basePath = pathname.split('/')[1];

  return (
    <HeaderS>
      <Typography component='h3' variant='h3' onClick={() => (basePath === 'settings' || id) && history.goBack()}>
        {(RoutesNames.settings.includes(basePath) || id) && <ArrowTopIcon />}
        {id ? individualPageNames[basePath] : pageNames[basePath]}
      </Typography>
      <UserImage onClick={() => history.push(RoutesNames.settings)}>
        <img src={userUpdatedPhotoUrl || userImage || profileIcon} alt='' />
      </UserImage>
    </HeaderS>
  );
};

export default Header;
