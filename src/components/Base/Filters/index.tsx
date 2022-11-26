import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import Modal from '../Modal/Modal';
import FilterOptions from './FilterOptions';
import FilterNames from './FilterNames';
import { useGetPropertyFilters } from '../../../Hooks/rental';
import { useGetAnimalFilters } from '../../../Hooks/application';
import { useAppDispatch, useAppState } from '../../../contexts/store';

type FilterProps = {
  filtersModalOpen: boolean;
  setFiltersModalOpen: (val: boolean) => void;
};

export const filterNames: { [key: string]: string } = {
  animals: 'animals',
  properties: 'properties',
};

const Filters = ({ filtersModalOpen, setFiltersModalOpen }: FilterProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const basePath = pathname.split('/')[1];
  const { profile, filters, queriedFiltrationValues } = useAppState();
  const [filterationData, setFilterationData] = useState<null | object>(null);
  const { reFetch } = useGetAnimalFilters(profile?.id, (data) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        content: data,
        filterName: filterNames.animals,
        title: 'Animal Filters',
      },
    });
  });

  const { reFetch: reFetchPropertyFilters } = useGetPropertyFilters(profile?.id, (data) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        content: data,
        filterName: filterNames.properties,
        title: 'Property Filters',
      },
    });
  });

  const filterRequests = {
    ['animals' as string]: reFetch,
    ['properties' as string]: reFetchPropertyFilters,
  };

  useEffect(() => {
    if (profile?.id) {
      if (!filters || !filters[filterNames[basePath]]) {
        filterRequests[basePath]({
          params: {
            maintainerId: profile.id,
          },
        });
      }
    }
  }, [profile]);

  const handleClose = () => {
    if (queriedFiltrationValues) {
      const selectedFilters = cloneDeep(queriedFiltrationValues);

      dispatch({
        type: 'SET_SELECTED_FILTRATION_VALUES',
        payload: selectedFilters,
      });
    }
    setFiltersModalOpen(false);
  };

  return (
    <Modal title={filters && filters[filterNames[basePath]]?.title} open={filtersModalOpen} handleClose={handleClose}>
      {filterationData ? (
        <FilterNames setFilterationData={setFilterationData} basePath={basePath} filterationData={filterationData} />
      ) : (
        <FilterOptions
          setFilterationData={setFilterationData}
          basePath={basePath}
          setFiltersModalOpen={setFiltersModalOpen}
        />
      )}
    </Modal>
  );
};

export default Filters;
