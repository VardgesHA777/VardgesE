import styled from 'styled-components';
import Typography from '@mui/material/Typography';

type BigTitleProps = {
  component: string;
  variant: string;
};

export const ImageName = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  .MuiTypography-root {
    margin-left: 12px;
  }
`;

export const Flex = styled.div<{ margin?: string; justifyContent?: string }>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  margin: ${({ margin }) => margin || '0 0 16px 0'};
`;

export const BigTitle = styled(Typography)<BigTitleProps>`
  &.MuiTypography-root {
    margin: 16px 0;
  }
`;

export const AnimalTitle = styled(Typography)<BigTitleProps>`
  &.MuiTypography-root {
    margin: 32px 0 16px;
  }
`;

export const AnimalComplaintBlockS = styled.div``;
