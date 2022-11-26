import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { PopperProps } from '@mui/material/Popper';
import { AutoComplete, Button } from '@landlord-tech/opp-ui-kit';

import { ArrowTopIcon } from '../../Icons/Icons';
import {
  FilterNamesS,
  AutoCompleteField,
  FilterName,
  FilterationNameAutoComplete,
  FilterationFooter,
  SPopper,
} from '../styles';
import { useAppDispatch, useAppState } from '../../../../contexts/store';

const CustomPopper = (props: JSX.IntrinsicAttributes & PopperProps) => {
  return <SPopper {...props} placement='bottom-start' />;
};

const FilterNames = ({
  filterationData,
  setFilterationData,
  basePath,
}: {
  filterationData: {
    key?: string;
    count?: number;
    type?: string;
    displayName?: string;
    choices?: { key: string; displayName: string }[];
  };
  setFilterationData: (val: null) => void;
  basePath: string;
}) => {
  const dispatch = useAppDispatch();
  const { selectedFiltrationValues } = useAppState();
  const [selectedFilterValuesLocal, setSelectedFilterValuesLocal] = useState(
    selectedFiltrationValues?.[basePath]?.[filterationData.key || '']
  );

  const generateSelectedFilters = () => {
    if (selectedFilterValuesLocal.length === 0) {
      delete selectedFiltrationValues[basePath][filterationData.key || ''];
      return selectedFiltrationValues;
    }
    return {
      ...selectedFiltrationValues,
      [basePath]: {
        ...(selectedFiltrationValues && selectedFiltrationValues[basePath]),
        [filterationData.key || '']: selectedFilterValuesLocal,
      },
    };
  };

  const applySelectedFilters = () => {
    setFilterationData(null);
    return dispatch({
      type: 'SET_SELECTED_FILTRATION_VALUES',
      payload: generateSelectedFilters(),
    });
  };

  const resetSelectedFilters = () => {
    setSelectedFilterValuesLocal(selectedFilterValuesLocal?.[basePath]?.[filterationData.key || ''] || []);
  };

  return (
    <FilterNamesS>
      <FilterationNameAutoComplete>
        <AutoCompleteField>
          <FilterName onClick={() => setFilterationData(null)}>
            <ArrowTopIcon />
            <Typography component='h5' variant='h5'>
              {filterationData.displayName}
            </Typography>
          </FilterName>
          <AutoComplete
            open
            className='filter-autoComplete'
            value={selectedFilterValuesLocal || []}
            name={filterationData.key || ''}
            handleChange={(name, value: any) => setSelectedFilterValuesLocal(value)}
            placeholder='Search'
            options={(filterationData.choices || []).map((item: { key: string; displayName: string }) => {
              return {
                name: item.displayName,
                key: item.key,
              };
            })}
          />
        </AutoCompleteField>
      </FilterationNameAutoComplete>
      <FilterationFooter>
        <Button text='Apply' onClick={applySelectedFilters} />
        <Button text='Reset' onClick={resetSelectedFilters} className='reset-btn' />
      </FilterationFooter>
    </FilterNamesS>
  );
};

export default FilterNames;
