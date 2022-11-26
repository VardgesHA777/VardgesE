import React from 'react';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const theme = createTheme({
  primary: '#f9c94e',
  black: '#000000',
  lightGray: '#9C9C9C',
  secondGray: '#5F5F5F',
  yellow: '#FCC425',
  mediumGray: '#E3E4E4',
  blackSecond: '#272727',
  gray: '#717171',
  lightBlack: '#0D0D0D',
  errorColor: '#EA001B',
  strongGreen: '#68D656',
  white: '#ffffff',
  mediumLightGray: '#EFF3F5',
  mediumBlack: '#9e9e9e',
  inputBackground: '#F5F5F5',
  filterBackground: '#FFEAB0',
  palette: {
    primary: {
      main: '#FCC425',
    },
  },
  typography: {
    color: '#000000',
    h2: {
      fontSize: '24px',
      lineHeight: 1.5,
      fontWeight: '400',
      fontFamily: 'Cabin',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 400,
      fontFamily: 'Cabin',
    },
    h4: {
      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: '400',
      fontFamily: 'Cabin',
    },
    h5: {
      fontSize: '16px',
      lineHeight: '19px',
      fontWeight: '400',
      fontFamily: 'Cabin',
    },
  },
} as ThemeOptions);
