import React from 'react';

import { TabNavBarItem, TabNavBarS } from '../../../../styles';
import { tabValues } from '../../index';

type NavBarBarTypes = {
  selectedTabValue: string;
  setSelectedTabItem: (val: string) => void;
};

const TabNavBar = ({ selectedTabValue, setSelectedTabItem }: NavBarBarTypes) => {
  return (
    <TabNavBarS>
      <TabNavBarItem
        component='h5'
        variant='h5'
        onClick={() => {
          setSelectedTabItem(tabValues.animals);
        }}
        selected={selectedTabValue === tabValues.animals}
      >
        Animals
      </TabNavBarItem>
      <TabNavBarItem
        component='h5'
        variant='h5'
        onClick={() => setSelectedTabItem(tabValues.complaints)}
        selected={selectedTabValue === tabValues.complaints}
      >
        Animal complaints
      </TabNavBarItem>
    </TabNavBarS>
  );
};

export default TabNavBar;
