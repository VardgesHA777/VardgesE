import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import { theme } from '../../theme';

const Theme = theme as { [key: string]: any };

export const SimpleAlertS = styled.div`
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 1400;
  border-radius: 4px;
  width: calc(100% - 40px);
  &.success-alert {
    border: 1px solid ${Theme.strongGreen};
  }
  .close {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
  }
`;

export const SAlert = styled(Alert)`
  align-items: center;
`;
