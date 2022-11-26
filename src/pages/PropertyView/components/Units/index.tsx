import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@landlord-tech/opp-ui-kit';
import { UnitS, UnitList, Search, SearchInput, NoListDataTypography } from './Unit/styles';
import { useAppState } from '../../../../contexts/store';
import Unit from './Unit';

type UnitsProps = {
  data: {
    id: number;
    number: string;
  }[];
  rentalId: number;
  isSearchVisible: boolean;
  reFetchGetPropertyUnits: ({
    params,
  }: {
    params: {
      userId: string;
      unitNumber: string;
      rentalId: string;
    };
  }) => void;
};

const Units = ({ data, rentalId, reFetchGetPropertyUnits, isSearchVisible }: UnitsProps) => {
  const { profile } = useAppState();
  const [searchValue, setSearchValue] = useState('');

  const searchUnits = async () => {
    reFetchGetPropertyUnits({ params: { userId: profile.id, rentalId: `${rentalId}`, unitNumber: searchValue } });
  };

  return (
    <UnitS>
      <Typography component='h2' variant='h2'>
        Units
      </Typography>
      {isSearchVisible && (
        <Search>
          <SearchInput
            label='label'
            name='unit'
            type='text'
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder='Enter unit number'
          />
          <Button text='Search' sizeCustom='small' onClick={searchUnits} />
        </Search>
      )}
      {data && (
        <UnitList>
          {data.length > 0 ? (
            data.map((item) => {
              return <Unit item={item} key={item.id} />;
            })
          ) : (
            <NoListDataTypography component='h5' variant='h5'>
              Your search does not match a unit number at this property.
            </NoListDataTypography>
          )}
        </UnitList>
      )}
    </UnitS>
  );
};

export default Units;
