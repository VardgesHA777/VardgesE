import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import MainLayout from '../../components/Base/MainLayout';
import AnimalComplaintBlock from './components/AnimalComplaintBlock';
import AnimalComplaintInformation from './components/AnimalComplaintInformation';
import { useGetIndividualComplaint } from '../../Hooks/complaint';
import { useAppState } from '../../contexts/store';

const AnimalComplaint = () => {
  const { id } = useParams<{ id: string }>();
  const { profile } = useAppState();

  useEffect(() => {
    const complaintAnimalImages = document.querySelectorAll<HTMLElement>('.complaint-animal-image');
    complaintAnimalImages.forEach((item, index) => {
      const imageHeight = complaintAnimalImages[0].clientWidth;
      complaintAnimalImages[index].style.height = `${imageHeight}px`;
    });
  }, []);

  const { reFetch, data } = useGetIndividualComplaint(id);

  useEffect(() => {
    if (profile) {
      reFetch({
        params: {
          userId: profile?.id,
        },
      });
    }
  }, [profile]);

  return (
    <MainLayout padding='0 20px 8px 20px'>
      {data && (
        <>
          <AnimalComplaintBlock data={data?.complaint} />
          <AnimalComplaintInformation data={data?.complaintInfo} />
        </>
      )}
    </MainLayout>
  );
};

export default AnimalComplaint;
