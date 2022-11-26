import styled from 'styled-components';

import { theme } from '../../theme';

const Theme = theme as { [key: string]: any };

export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  margin-bottom: 24px;
`;

export const NavItem = styled.div`
  color: ${Theme.black};
  font-size: 16px;
  margin-left: 10px;
`;

export const NavItemBox = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding-bottom: 4px;
  div {
    color: ${({ selected }) => (selected ? Theme.yellow : Theme.lightBlack)};
  }
  path {
    fill: ${({ selected }) => (selected ? Theme.yellow : Theme.lightBlack)};
  }
`;

export const Filter = styled.div`
  position: relative;
  display: flex;
  background-color: ${Theme.filterBackground};
  border-radius: 4px;
  padding: 8px;
  margin: 0 10px;
  h5 {
    margin-left: 5px;
  }
  svg {
    :last-child {
      position: absolute;
      left: 20px;
      top: 5px;
    }
  }
`;

export const NavFilterBox = styled.div`
  min-width: 91px;
  min-height: 35px;
`;
