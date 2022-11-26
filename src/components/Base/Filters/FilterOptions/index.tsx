import React from 'react';
import { cloneDeep } from 'lodash';

import { Button } from '@landlord-tech/opp-ui-kit';
import SelectedFiltersView from './components/SelectedFiltersView';
import {
  FilterByOptionField,
  FilterByOptionFields,
  OptionTextArrow,
  OptionText,
  FilterOptionsS,
  FilterationFooter,
} from '../styles';
import { ArrowTopIcon } from '../../Icons/Icons';
import { useAppState, useAppDispatch } from '../../../../contexts/store';

type FilteredOption = {
  choices: {
    key: string;
    displayName: string;
  }[];
  count: number;
  displayName: string;
  key: string;
  type: string;
};

type FilterOptionsProps = {
  setFilterationData: (val: FilteredOption) => void;
  setFiltersModalOpen: (val: boolean) => void;
  basePath: string;
};

const FilterOptions = ({ setFilterationData, setFiltersModalOpen, basePath }: FilterOptionsProps) => {
  const dispatch = useAppDispatch();
  const { filters: filteredOptions, selectedFiltrationValues } = useAppState();

  const convertFiltersToParams = () => {
    const params = new URLSearchParams();
    Object.keys(selectedFiltrationValues[basePath]).map((key) => {
      return selectedFiltrationValues[basePath][key].map((item: { key: string }) => {
        return params.append(key, item.key);
      });
    });
    return params;
  };

  const searchBySelectedFilters = (reset?: boolean) => {
    const queriedFilters = cloneDeep(selectedFiltrationValues);

    dispatch({
      type: 'SET_QUERIED_FILTRATION_VALUES',
      payload: queriedFilters,
    });

    dispatch({
      type: 'SET_FILTERS_PARAMS',
      payload: {
        name: basePath,
        params:
          reset || !selectedFiltrationValues || !selectedFiltrationValues[basePath] ? null : convertFiltersToParams(),
      },
    });
    return setFiltersModalOpen(false);
  };

  const resetFilters = () => {
    const updatedFilters = { ...selectedFiltrationValues };
    delete updatedFilters[basePath];
    dispatch({ type: 'SET_SELECTED_FILTRATION_VALUES', payload: updatedFilters });
    return searchBySelectedFilters(true);
  };

  return (
    <FilterOptionsS>
      <FilterByOptionFields>
        {filteredOptions &&
          filteredOptions[basePath]?.content.map((item: FilteredOption) => {
            return (
              <FilterByOptionField key={item.key}>
                <OptionTextArrow onClick={() => setFilterationData(item)}>
                  <OptionText component='h5' variant='h5'>
                    {item.displayName}
                  </OptionText>
                  <ArrowTopIcon />
                </OptionTextArrow>
                {selectedFiltrationValues &&
                  selectedFiltrationValues[basePath] &&
                  selectedFiltrationValues[basePath][item.key] && (
                    <SelectedFiltersView filterKey={item.key} basePath={basePath} />
                  )}
              </FilterByOptionField>
            );
          })}
      </FilterByOptionFields>

      <FilterationFooter>
        <Button onClick={() => searchBySelectedFilters()} text='Show items' />
        <Button text='Reset' onClick={resetFilters} className='reset-btn' />
      </FilterationFooter>
    </FilterOptionsS>
  );
};

export default FilterOptions;
