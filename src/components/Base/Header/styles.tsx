import styled from 'styled-components';

import { theme } from '../../theme';

const Theme = theme as { [key: string]: any };

export const HeaderS = styled.div`
  background-color: ${Theme.yellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  h3 {
    display: flex;
    align-items: center;
    svg {
      transform: rotate(-90deg);
      margin-right: 10px;
    }
  }
`;

export const UserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
