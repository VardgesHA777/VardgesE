import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import MainLayout from '../../components/Base/MainLayout';
import { RoutesNames } from '../../routes/RoutesNames';
import { useGetIndividualAnimal } from '../../Hooks/application';
import { useAppState } from '../../contexts/store';
import AnimalDetail from './components/AnimalDetail';

const AnimalView = () => {
  const history = useHistory();
  const { profile } = useAppState();
  const { id } = useParams<{ id: string }>();
  const { reFetch, data } = useGetIndividualAnimal(id, () => {
    history.push(RoutesNames.animals);
  });

  useEffect(() => {
    (async () => {
      if (profile?.id) {
        await reFetch({
          params: {
            maintainerId: profile.id,
          },
        });
      }
    })();
  }, [profile]);

  return <MainLayout padding='0 20px 8px 20px'>{data && <AnimalDetail data={data} />}</MainLayout>;
};

export default AnimalView;
