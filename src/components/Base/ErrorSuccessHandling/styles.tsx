import styled from 'styled-components';
import { theme } from '../../theme';

const Theme = theme as { [key: string]: any };

export const ErrorHandlingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 45%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const ErrorTitle = styled.div`
  color: ${Theme.black};
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-bottom: 25px;
`;
