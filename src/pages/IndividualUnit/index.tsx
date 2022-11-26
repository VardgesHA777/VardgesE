import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MainLayout from '../../components/Base/MainLayout';
import UnitInfo from './component/UnitInfo';
import UnitTabs from './component/UnitTabs';
import { useGetIndividualUnit } from '../../Hooks/units';
import { useAppState } from '../../contexts/store';

const IndividualUnit = () => {
  const { id } = useParams<{ id: string }>();
  const { reFetch, data } = useGetIndividualUnit(id);
  const { profile } = useAppState();

  useEffect(() => {
    if (profile) {
      reFetch({
        params: {
          userId: profile.id,
        },
      });
    }
  }, [profile]);

  return (
    <MainLayout padding='0 20px 0 20px'>
      {!!data && (
        <>
          <UnitInfo data={data} />
          <UnitTabs />
        </>
      )}
    </MainLayout>
  );
};

export default IndividualUnit;
