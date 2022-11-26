import React from 'react';
import Typography from '@mui/material/Typography';

import { CloseIconField, IndividualSelectedFilter, SelectedFiltersViewS } from '../../../styles';
import { CloseIcon } from '../../../../Icons/Icons';
import { useAppDispatch, useAppState } from '../../../../../../contexts/store';

const SelectedFiltersView = ({ filterKey, basePath }: { filterKey: string; basePath: string }) => {
  const dispatch = useAppDispatch();
  const { selectedFiltrationValues } = useAppState();

  const removeSelectedFilter = (filterType: string, filterName: string) => {
    const updatedSelectedFilters = { ...selectedFiltrationValues };
    if (updatedSelectedFilters[basePath][filterType].length !== 1) {
      updatedSelectedFilters[basePath][filterType] = updatedSelectedFilters[basePath][filterType].filter(
        (i: { key: string }) => i.key !== filterName
      );
    } else {
      delete updatedSelectedFilters[basePath][filterType];
      if (Object.keys(updatedSelectedFilters[basePath]).length === 0) {
        delete updatedSelectedFilters[basePath];
      }
    }

    dispatch({
      type: 'SET_SELECTED_FILTRATION_VALUES',
      payload: updatedSelectedFilters,
    });
  };

  return (
    <SelectedFiltersViewS>
      {selectedFiltrationValues[basePath][filterKey].map((selectedFilter: { key: string; name: string }) => {
        return (
          <IndividualSelectedFilter
            key={selectedFilter.key}
            onClick={() => removeSelectedFilter(filterKey, selectedFilter.key)}
          >
            <Typography component='h5' variant='h5'>
              {selectedFilter.name}
            </Typography>
            <CloseIconField>
              <CloseIcon color='white' />
            </CloseIconField>
          </IndividualSelectedFilter>
        );
      })}
    </SelectedFiltersViewS>
  );
};

export default SelectedFiltersView;
