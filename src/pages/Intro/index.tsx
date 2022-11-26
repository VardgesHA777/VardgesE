import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@landlord-tech/opp-ui-kit';

import { IntroS, Logo, MainImage, IntroDescription, IntroContent } from './style';
import { RoutesNames } from '../../routes/RoutesNames';
import logo from '../../assets/images/logo.svg';
import introDogsImage from '../../assets/images/introDogs.svg';
import { useChangeIntro } from '../../Hooks/maintainer';
import { useAppState } from '../../contexts/store';
import { ClearStorage } from '../../shared/Storage';

const Intro = () => {
  const history = useHistory();
  const { profile } = useAppState();

  if (!profile) {
    ClearStorage();
    history.push('/');
  }

  const { reFetch } = useChangeIntro(profile?.id, () => {
    return history.push(RoutesNames.properties);
  });

  const handleIntro = async () => {
    await reFetch({
      body: {
        showIntro: false,
      },
    });
  };

  return (
    <IntroS>
      <Logo className='logo'>
        <img src={logo} alt='' />
      </Logo>
      <IntroContent>
        <MainImage>
          <img src={introDogsImage} alt='' />
        </MainImage>
        <Typography component='h2' variant='h2'>
          You have successfully created your account
        </Typography>
        <IntroDescription>Welcome to the Pet Mapping Tool!</IntroDescription>
        <Button text='Get Started' onClick={handleIntro} />
      </IntroContent>
    </IntroS>
  );
};

export default Intro;
