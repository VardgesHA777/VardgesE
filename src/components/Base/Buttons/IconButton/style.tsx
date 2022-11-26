import styled from 'styled-components';
import Button from '@mui/material/Button';
import { theme } from '../../../theme';

const Theme = theme as { [key: string]: any };

export const SButton = styled(Button)<{
  margin?: string;
  padding?: string;
  variant: string;
  textColor?: string;
  bgColor?: string;
}>`
  &.MuiButton-root {
    display: inline-flex;
    align-items: center;
    color: ${({ textColor }) => textColor || ''};
    background-color: ${({ variant, bgColor }) => (variant === 'contained' ? bgColor || Theme.yellow : '')};
    box-shadow: none;
    border: ${({ variant, bgColor }) =>
      ['text', 'contained'].includes(variant) ? 'none' : `1px solid ${bgColor || Theme.yellow}`};
    border-radius: 4px;
    padding: ${({ padding }) => padding || '4px 8px'};
    margin: ${({ margin }) => margin || ''};
    font-family: Cabin, sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-transform: none;
  }
  & .MuiButton-startIcon {
    margin-left: 0;
  }
  & .MuiButton-endIcon {
    margin-right: 0;
  }
`;
