import styled from 'styled-components';

import Dialog from '@mui/material/Dialog';

export const ModalDialog = styled(Dialog)`
  .MuiDialog-container {
    height: 100%;
    width: 100%;
    .MuiPaper-root {
      width: 100%;
      height: 100%;
      margin: 0;
      max-height: 100%;
      max-width: unset;
    }
  }
  &.report-animal-complaint .MuiPaper-root::-webkit-scrollbar-thumb {
    background: unset;
  }
`;

export const Close = styled.div<{ onClick?: () => void }>`
  margin-top: -10px;
`;

export const Header = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  padding: 24px 20px 0 20px;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 30;
`;
