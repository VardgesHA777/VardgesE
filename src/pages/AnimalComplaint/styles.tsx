import styled from 'styled-components';

export const AnimalViolation = styled.div`
  padding-bottom: 74px;
`;

export const HouseInformation = styled.div`
  margin-top: 16px;
`;

export const WholeField = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => margin || 0};
`;

export const AnimalComplaintInformationS = styled.div`
  margin-top: 32px;
  .complaint-images {
    padding: 8px 0 0;
  }
`;
