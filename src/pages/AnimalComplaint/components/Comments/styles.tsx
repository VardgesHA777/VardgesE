import styled from 'styled-components';

import { theme } from '../../../../components/theme';

const Theme = theme as { [key: string]: any };

export const CommentsS = styled.div`
  padding-bottom: 8px;
`;

export const Comment = styled.div`
  margin-bottom: 16px;
`;

export const ReportedUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  h5 {
    margin-right: 12px;
  }
`;

export const ExpandMore = styled.div<{ expanded: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6px;
  border-bottom: 1px solid ${Theme.mediumBlack};
  margin-bottom: 16px;
  svg {
    transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;
