import React from 'react';
import { useLocation } from 'react-router-dom';

import MainLayout from '../../components/Base/MainLayout';
import Animal from './components/Animal';
import ListTitle from '../../components/Base/ListTitle';
import LoadMoreItems from '../../components/Base/LoadMoreItems';
import { AnimalsS } from './components/Animal/style';
import { useGetAnimals } from '../../Hooks/animal';
import { useAppState } from '../../contexts/store';
import { AnimalsContentTypes } from '../../types/types';

const Animals = () => {
  const { pathname } = useLocation();
  const { contentItems } = useAppState();
  const basePath = pathname.split('/')[1];

  return (
    <MainLayout padding='0 20px 8px 20px'>
      <ListTitle title='Animals' />
      <AnimalsS>
        <LoadMoreItems hook={useGetAnimals} paramsName={basePath} noDataText='There are no animals yet.'>
          {contentItems?.map((item: AnimalsContentTypes) => (
            <Animal item={item} key={item.id} />
          ))}
        </LoadMoreItems>
      </AnimalsS>
    </MainLayout>
  );
};

export default Animals;
