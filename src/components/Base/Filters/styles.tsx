import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import { theme } from '../../theme';

const Theme = theme as { [key: string]: any };

export const FilterOptionsS = styled.div`
  padding-top: 80px;
  border-bottom: 1px solid ${Theme.mediumGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CloseIconField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50%;
  background-color: ${Theme.yellow};
  margin-left: 8px;
`;

export const FilterByOptionField = styled.div`
  padding-left: 16px;
  border-top: 1px solid ${Theme.mediumGray};
  svg {
    transform: rotate(90deg);
  }
`;

export const OptionTextArrow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
`;

export const SelectedFiltersViewS = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  overflow-x: scroll;
`;

export const IndividualSelectedFilter = styled.div`
  padding: 8px 16px;
  display: flex;
  margin: 0 5px 5px 0;
  border: 1px solid ${Theme.yellow};
  border-radius: 24px;
`;

export const OptionText = styled(Typography)<{ component: string; variant: string }>`
  padding: 18px 0;
`;

export const FilterNamesS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const FilterName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  h5 {
    margin-left: 15px;
  }
  svg {
    transform: rotate(-90deg);
  }
`;

export const FilterationNameAutoComplete = styled.div`
  padding: 80px 0 0 0;
  .filter-autoComplete {
    color: rebeccapurple;
  }
`;

export const AutoCompleteField = styled.div`
  padding: 0 20px;
`;

export const FilterByOptionFields = styled.div``;

export const FilterationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  .reset-btn {
    color: ${Theme.black} !important;
    background: transparent !important;
    :hover {
      background: unset !important;
    }
  }
`;

export const SPopper = styled(Popper)`
  &.MuiAutocomplete-popper {
    width: 100% !important;
  }
  & ul.MuiAutocomplete-listbox {
    max-height: calc(100vh - 310px);
  }
`;
