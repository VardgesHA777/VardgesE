import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

import Filters from '../Filters';
import { AnimalIcon, FilterSelectedCircleIcon, PropertiesIcon, FilterIcon } from '../Icons/Icons';
import { NavItem, NavItemBox, NavItems, Filter, NavFilterBox } from './style';
import { RoutesNames } from '../../../routes/RoutesNames';
import { useAppState } from '../../../contexts/store';

const filtersIncludingPaths = [RoutesNames.properties.substring(1), RoutesNames.animals.substring(1)];

const NavBar = () => {
  const { filterParams } = useAppState();
  const [filtersModalOpen, setFiltersModalOpen] = useState<boolean>(false);
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const basePath = pathname.substring(1);

  return (
    <NavItems>
      <NavItemBox
        selected={pathname.includes(RoutesNames.properties)}
        onClick={() => history.push(RoutesNames.properties)}
      >
        <PropertiesIcon />
        <NavItem>Properties</NavItem>
      </NavItemBox>
      <NavItemBox selected={pathname.includes(RoutesNames.animals)} onClick={() => history.push(RoutesNames.animals)}>
        <AnimalIcon />
        <NavItem>Animals</NavItem>
      </NavItemBox>
      <NavFilterBox>
        {filtersIncludingPaths.includes(basePath) && (
          <Filter onClick={() => setFiltersModalOpen(true)}>
            <FilterIcon />
            <Typography component='h5' variant='h5'>
              Filter
            </Typography>
            {filterParams?.[basePath] && <FilterSelectedCircleIcon />}
          </Filter>
        )}
      </NavFilterBox>
      {filtersModalOpen && <Filters filtersModalOpen={filtersModalOpen} setFiltersModalOpen={setFiltersModalOpen} />}
    </NavItems>
  );
};

export default NavBar;
