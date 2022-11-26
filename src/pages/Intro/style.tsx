import styled from 'styled-components';

import { theme } from '../../components/theme';

const Theme = theme as { [key: string]: any };

export const IntroS = styled.div`
  padding: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 36px);
  .logo {
    position: fixed;
    top: 25px;
    left: 0;
    right: 0;
  }
  .close {
    position: absolute;
    right: 18px;
    top: 18px;
  }
`;

export const IntroContent = styled.div``;

export const Logo = styled.div`
  text-align: center;
  margin-top: 25px;
`;

export const IntroDescription = styled.div`
  color: ${Theme.black};
  font-size: 14px;
  line-height: 17px;
  margin: 16px 0 40px;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 160px;
  margin: 95px 0 56px;
  img {
    width: 100%;
    height: 100%;
  }
`;
