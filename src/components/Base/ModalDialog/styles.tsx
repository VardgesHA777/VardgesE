import styled from 'styled-components';

import Dialog from '@mui/material/Dialog';

export const SModalDialog = styled(Dialog)`
  .MuiDialog-container {
    .MuiPaper-root {
      width: 70%;
      //    height: 100%;
      //    margin: 0;
      //    max-height: 100%;
      //    max-width: unset;
    }
  }
`;

export const Close = styled.div<{ onClick?: () => void }>`
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const Header = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  padding: 18px;
`;

export const ContentContainer = styled.div`
  overflow: auto;
  padding: 16px;
  margin-top: 30px;
  text-align: center;
`;
