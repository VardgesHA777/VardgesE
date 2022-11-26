import styled from 'styled-components';

import { theme } from '../../../../components/theme';

const Theme = theme as { [key: string]: any };

export const SelectedPropertyS = styled.div``;

export const ImageNameAddress = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const NameAddress = styled.div`
  margin-left: 12px;
`;

export const Address = styled.div`
  color: ${Theme.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

export const IndividualInfo = styled.div`
  margin-bottom: 16px;
`;

export const WholeAnimals = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const IndiviualAnimalCount = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 11px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-right: 8px;
  padding: 7px 25px;
  background-color: ${({ selected }) => (selected ? Theme.yellow : 'white')};
`;

export const Count = styled.div`
  color: ${Theme.lightBlack};
  margin: 6px 0;
`;

export const Type = styled.div`
  color: ${Theme.lightBlack};
  font-size: 12px;
  line-height: 15px;
`;
