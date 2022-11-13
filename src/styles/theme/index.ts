import { IThemeProps } from './types';

const light: Readonly<IThemeProps> = {
  colors: {
    background: '#FFFFFF',
    black: '#000',
    white: '#FFFFFF',
    text: '#2D3748',
    heading: '#171923',
    gray: {
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#3f3f46',
      800: '#1A202C',
      900: '#171923',
    },
    green: {
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
    },
    purple: {
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
    },
    red: {
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
    },
    yellow: {
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
    },
  },
  fonts: {
    poppins: {
      light: '',
      regular: '',
      bold: '',
    },
    roboto: {
      light: '',
      regular: '',
      bold: '',
    },
  },
};

const dark: Readonly<IThemeProps> = {
  colors: {
    background: '#FFFFFF',
    black: '#000',
    white: '#FFFFFF',
    text: '#2D3748',
    heading: '#171923',
    gray: {
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    green: {
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
    },
    purple: {
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
    },
    red: {
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
    },
    yellow: {
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
    },
  },
  fonts: {
    poppins: {
      light: '',
      regular: '',
      bold: '',
    },
    roboto: {
      light: '',
      regular: '',
      bold: '',
    },
  },
};

export const theme = {
  light,
  dark,
};
