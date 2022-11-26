import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import MainLayout from '../../components/Base/MainLayout';
import SelectedProperty from './components/SelectedProperty';
import Units from './components/Units/index';
import { useGetIndividualProperty, useGetPropertyUnits } from '../../Hooks/rental';
import { useAppState } from '../../contexts/store';

const PropertyView = () => {
  const { profile } = useAppState();
  const { id } = useParams<{ id: string }>();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const { reFetch: reFetchGetPropertyUnits, data: propertyUnitsData } = useGetPropertyUnits(id, (data) => {
    if (data.length > 0) {
      setIsSearchVisible(true);
    }
  });

  const { reFetch, data } = useGetIndividualProperty(id, (data) => {
    reFetchGetPropertyUnits({ params: { userId: profile.id, rentalId: data.id } });
  });

  useEffect(() => {
    if (profile?.id) {
      reFetch({
        params: {
          maintainerId: profile.id,
        },
      });
    }
  }, [profile]);

  return (
    <MainLayout padding='0 20px 8px 20px'>
      {data && (
        <>
          <SelectedProperty data={data} />
          <Units
            data={propertyUnitsData || []}
            rentalId={data.id}
            isSearchVisible={isSearchVisible}
            reFetchGetPropertyUnits={reFetchGetPropertyUnits}
          />
        </>
      )}
    </MainLayout>
  );
};

export default PropertyView;
