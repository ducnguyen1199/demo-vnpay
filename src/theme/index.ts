import { createTheme as createMuiTheme } from '@mui/material';
import { createComponents } from './create-components';
import createTypography from './create-typography';
import { Oswald } from 'next/font/google';

export const oswaldFont = Oswald({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export function createTheme() {
  const components = createComponents();
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    components,
    typography,
  });
}
