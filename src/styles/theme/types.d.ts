export interface IThemeProps {
  colors: {
    background: string;
    white: string;
    black: string;
    text: string;
    heading: string;
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    green: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };
    red: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };
    yellow: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };
    purple: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };
  };
  fonts: {
    poppins: {
      light: string;
      regular: string;
      bold: string;
    };
    roboto: {
      light: string;
      regular: string;
      bold: string;
    };
  };
}
