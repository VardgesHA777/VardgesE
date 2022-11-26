import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { theme } from '../../components/theme';

const Theme = theme as { [key: string]: any };

export const UnitInfoS = styled.div``;

export const TabsS = styled.div`
  margin-top: 32px;
`;

export const UnitNumber = styled(Typography)<{ component: string; variant: string }>`
  color: ${Theme.yellow};
  margin-left: 10px !important;
`;

export const TabNavBarS = styled.div`
  display: flex;
  border-bottom: 1px solid ${Theme.mediumBlack};
  margin-bottom: 24px;
`;

export const TabNavBarItem = styled(Typography)<{ component: string; variant: string; selected: boolean }>`
  color: ${Theme.blackSecond};
  padding-bottom: 8px;
  font-family: Cabin !important;
  position: relative;
  font-weight: ${({ selected }) => (selected ? '600' : '400')} !important;
  margin-right: 18px !important;
  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    background: ${({ selected }) => (selected ? Theme.yellow : `transparent`)};
    bottom: -1px;
  }
`;

export const AnimalsS = styled.div``;
