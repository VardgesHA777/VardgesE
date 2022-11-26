import React, { useState } from 'react';

import { TabsS } from '../../styles';
import TabNarItems from './component/TabNavBar';
import Animals from './component/Animals';
import AnimalComplaintList from './component/AnimalComplaintList';

export const tabValues = {
  animals: 'animals',
  complaints: 'complaints',
};

const UnitTabs = () => {
  const [selectedTabValue, setSelectedTabItem] = useState(tabValues.animals);
  return (
    <TabsS>
      <TabNarItems selectedTabValue={selectedTabValue} setSelectedTabItem={setSelectedTabItem} />
      {selectedTabValue === tabValues.complaints ? <AnimalComplaintList /> : <Animals />}
    </TabsS>
  );
};

export default UnitTabs;
