import { oswaldFont } from '.';
import { colors } from './colors';
import { ThemeOptions } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    square: true;
    'square-outlined': true;
  }
}

export const createComponents = (): ThemeOptions['components'] => {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          //CSS Here
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'square' },
          style: {
            padding: `${9} ${40}`,
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 'normal',
            fontFamily: oswaldFont.style.fontFamily,
            borderRadius: 0,
            border: `1px solid ${colors['#5B5A55']}`,
            color: colors['#FFFFFF'],
          },
        },
        {
          props: { variant: 'square-outlined' },
          style: {
            padding: `${16} ${53}`,
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '0.65px',
            fontFamily: oswaldFont.style.fontFamily,
            borderRadius: 0,
            textTransform: 'uppercase',
            border: `1px solid ${colors['#FFFFFF']}`,
            color: colors['#FFFFFF'],
          },
        },
      ],
    },

    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
        '@font-face': {
          fontFamily: oswaldFont.style.fontFamily,
          fontStyle: oswaldFont.style.fontStyle,
          fontDisplay: 'swap',
          fontWeight: oswaldFont.style.fontWeight,
        },
        body: {
          color: colors['#FFFFFF'],
        },
      },
    },
  };
};
