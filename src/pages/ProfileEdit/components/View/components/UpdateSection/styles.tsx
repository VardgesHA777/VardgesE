import styled from 'styled-components';
import { theme } from '../../../../../../components/theme';

const Theme = theme as { [key: string]: any };

export const UpdateSectionWrapper = styled.div`
  padding: 0 18px;
`;

export const ButtonsSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .update-btn {
    width: 100%;
  }
`;

export const InfoTitle = styled.div`
  font-size: 14px;
  color: ${Theme.secondGray};
  margin-bottom: 10px;
`;
