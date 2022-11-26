import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { Input } from '@landlord-tech/opp-ui-kit';
import { theme } from '../../../../../components/theme';

const Theme = theme as { [key: string]: any };

export const UnitS = styled.div``;

type TypographyProps = {
  component: string;
  variant: string;
};

export const UnitList = styled.div`
  margin-top: 4px;
  padding-bottom: 80px;
`;

export const UnitCount = styled(Typography)`
  color: ${Theme.yellow};
  margin-left: 12px !important;
`;

export const Search = styled.div`
  display: flex;
  margin-top: 16px;
  position: relative;
  div {
    width: 100%;
    height: 43px;
    border-radius: 31px;
    overflow: hidden;
    fieldset {
      border: unset;
    }
  }
  input {
    background-color: ${Theme.inputBackground};
    color: ${Theme.black};
  }
  .MuiFormControl-root {
    margin-bottom: 0;
  }
  .MuiButton-root {
    position: absolute;
    right: 0;
    height: 95%;
  }
  legend {
    display: none;
  }
`;

export const SearchInput = styled(Input)``;

export const NoListDataTypography = styled(Typography)<TypographyProps>`
  color: ${Theme.gray};
  margin-top: 4px;
`;
