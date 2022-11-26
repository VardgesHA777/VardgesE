import styled from 'styled-components';
import Typography from '@mui/material/Typography';

type TypographyProps = {
  component: string;
  variant: string;
  padding?: string;
};

export const TypographyS = styled(Typography)<TypographyProps>`
  padding: ${({ padding }) => padding};
`;

export const TenantImages = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const IndividualTenantImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 42px;
  height: 42px;
  margin-left: -21px;
  border: 2px solid white;
  :first-child {
    margin-left: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AnimalComplaintsList = styled.div`
  margin-bottom: 120px;
`;
