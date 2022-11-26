import styled from 'styled-components';
import Typography from '@mui/material/Typography';

import { theme } from '../../../../components/theme';

const Theme = theme as { [key: string]: any };

export const IndividualItemS = styled.div<{ justifyContent?: string; flexDirection?: string; alignItems?: string }>`
  display: flex;
  border: 1px solid ${Theme.primary};
  border-radius: 8px;
  padding: 16px;
  margin-top: 12px;
  flex-direction: ${({ flexDirection }) => flexDirection || 'unset'};
  justify-content: ${({ justifyContent }) => justifyContent || 'unset'};
  align-items: ${({ alignItems }) => alignItems || ''};
  width: 100%;
  .animal-name {
    display: flex;
    align-items: center;
    margin-left: 24px;
  }
  :first-child {
    margin-top: 16px;
  }
`;

export const AnimalNameUnitNumber = styled.div`
  width: 100%;
`;

export const AnimalsS = styled.div`
  margin-top: 20px;
`;

export const InfoField = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '50%'};
`;

export const ColorsTypography = styled(Typography)<{ component: string; variant: string }>`
  width: 90%;
  word-break: break-word;
`;
