import styled from 'styled-components';
import { Input } from '@landlord-tech/opp-ui-kit';

export const ReportAnimalComplaintS = styled.div`
  padding: 85px 18px 0;
`;

export const FormContentS = styled.div`
  margin-top: 0;
`;

export const FormFields = styled.div`
  margin-top: 16px;
  &.resident-info {
    div {
      width: 100%;
      input {
        height: 40px;
      }
    }
  }
  .MuiOutlinedInput-root {
    min-width: 100% !important;
  }
`;

export const FormBlock = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => margin || '0 0 16px 0'};
`;

export const InputS = styled(Input)``;
