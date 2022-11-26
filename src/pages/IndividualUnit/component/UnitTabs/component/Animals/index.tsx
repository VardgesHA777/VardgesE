import React from 'react';
import { useHistory } from 'react-router-dom';

import Animal from '../../../../../Animals/components/Animal';
import { AnimalsS } from '../../../../styles';
import { useGetAnimals } from '../../../../../../Hooks/animal';
import LoadMoreItems from '../../../../../../components/Base/LoadMoreItems';
import { useAppState } from '../../../../../../contexts/store';
import { AnimalsContentTypes } from '../../../../../../types/types';

const Animals = () => {
  const { contentItems } = useAppState();
  const {
    location: {
      state: { unitNumber },
    },
  } = useHistory() as { location: { state: { unitNumber: number } } };

  return (
    <AnimalsS>
      <LoadMoreItems
        hook={useGetAnimals}
        extraParams={{ rentalUnitNumber: unitNumber }}
        paramsName='unitAnimals'
        noDataText='There are no animals'
      >
        {contentItems?.map((item: AnimalsContentTypes) => (
          <Animal item={item} key={item.id} unitAnimal />
        ))}
      </LoadMoreItems>
    </AnimalsS>
  );
};

export default Animals;
