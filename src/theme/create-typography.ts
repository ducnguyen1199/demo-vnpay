import { TypographyOptions } from '@mui/material/styles/createTypography';
import { oswaldFont } from '.';
import { convertToRem } from '~utils/convertToRem';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontFamily: string;
    o13w200: React.CSSProperties;
    o14w200: React.CSSProperties;
    o16w200: React.CSSProperties;
    o24w200: React.CSSProperties;
    o11w300: React.CSSProperties;
    o13w300: React.CSSProperties;
    o16w300: React.CSSProperties;
    o14w400: React.CSSProperties;
    o15w400: React.CSSProperties;
    o16w400: React.CSSProperties;
    o24w400: React.CSSProperties;
    o32w400: React.CSSProperties;
    o16w500: React.CSSProperties;
    o24w500: React.CSSProperties;
    o36w500: React.CSSProperties;
    o48w500: React.CSSProperties;
    o64w500: React.CSSProperties;
    o16w600: React.CSSProperties;
    o20w600: React.CSSProperties;
    o24w600: React.CSSProperties;
    o32w600: React.CSSProperties;
    o36w600: React.CSSProperties;
    o40w600: React.CSSProperties;
    o48w600: React.CSSProperties;
    o53w600: React.CSSProperties;
    o64w600: React.CSSProperties;
    o90w600: React.CSSProperties;
    o100w600: React.CSSProperties;
    o128w600: React.CSSProperties;
    o14w700: React.CSSProperties;
    o15w700: React.CSSProperties;
  }

  // Update the Typography's variant prop options
  interface TypographyVariantsOptions {
    fontFamily: string;
    o13w200: React.CSSProperties;
    o14w200: React.CSSProperties;
    o16w200: React.CSSProperties;
    o24w200: React.CSSProperties;
    o11w300: React.CSSProperties;
    o13w300: React.CSSProperties;
    o16w300: React.CSSProperties;
    o14w400: React.CSSProperties;
    o15w400: React.CSSProperties;
    o16w400: React.CSSProperties;
    o24w400: React.CSSProperties;
    o32w400: React.CSSProperties;
    o16w500: React.CSSProperties;
    o24w500: React.CSSProperties;
    o36w500: React.CSSProperties;
    o48w500: React.CSSProperties;
    o64w500: React.CSSProperties;
    o16w600: React.CSSProperties;
    o20w600: React.CSSProperties;
    o24w600: React.CSSProperties;
    o32w600: React.CSSProperties;
    o36w600: React.CSSProperties;
    o40w600: React.CSSProperties;
    o48w600: React.CSSProperties;
    o53w600: React.CSSProperties;
    o64w600: React.CSSProperties;
    o90w600: React.CSSProperties;
    o100w600: React.CSSProperties;
    o128w600: React.CSSProperties;
    o14w700: React.CSSProperties;
    o15w700: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontFamily: true;
    o13w200: true;
    o14w200: true;
    o16w200: true;
    o24w200: true;
    o11w300: true;
    o13w300: true;
    o16w300: true;
    o14w400: true;
    o15w400: true;
    o16w400: true;
    o24w400: true;
    o32w400: true;
    o16w500: true;
    o24w500: true;
    o36w500: true;
    o48w500: true;
    o64w500: true;
    o16w600: true;
    o20w600: true;
    o24w600: true;
    o32w600: true;
    o36w600: true;
    o40w600: true;
    o48w600: true;
    o53w600: true;
    o64w600: true;
    o90w600: true;
    o100w600: true;
    o128w600: true;
    o14w700: true;
    o15w700: true;
  }
}

const createTypography = (): TypographyOptions => {
  return {
    fontFamily: oswaldFont.style.fontFamily,
    o13w200: {
      fontSize: convertToRem(13),
      fontWeight: 200,
    },
    o14w200: {
      fontSize: convertToRem(14),
      fontWeight: 200,
      lineHeight: convertToRem(20.75),
    },
    o16w200: {
      fontSize: convertToRem(16),
      fontWeight: 200,
    },
    o24w200: {
      fontSize: convertToRem(24),
      fontWeight: 200,
    },
    o11w300: {
      fontSize: convertToRem(11),
      fontWeight: 300,
    },
    o13w300: {
      fontSize: convertToRem(13),
      fontWeight: 300,
    },
    o16w300: {
      fontSize: convertToRem(16),
      fontWeight: 300,
      lineHeight: '136%',
    },
    o14w400: {
      fontSize: convertToRem(14),
      fontWeight: 400,
    },
    o15w400: {
      fontSize: convertToRem(15),
      fontWeight: 400,
      lineHeight: convertToRem(22.23),
    },
    o16w400: {
      fontSize: convertToRem(16),
      fontWeight: 400,
    },
    o24w400: {
      fontSize: convertToRem(24),
      fontWeight: 400,
      lineHeight: 'normal',
    },
    o32w400: {
      fontSize: convertToRem(32),
      fontWeight: 400,
    },
    o16w500: {
      fontSize: convertToRem(16),
      fontWeight: 600,
    },
    o24w500: {
      fontSize: convertToRem(24),
      fontWeight: 500,
    },
    o36w500: {
      fontSize: convertToRem(36),
      fontWeight: 500,
    },
    o48w500: {
      fontSize: convertToRem(48),
      fontWeight: 500,
    },
    o64w500: {
      fontSize: convertToRem(64),
      fontWeight: 500,
    },
    o16w600: {
      fontSize: convertToRem(16),
      fontWeight: 600,
      lineHeight: convertToRem(23.71),
    },
    o20w600: {
      fontSize: convertToRem(20),
      fontWeight: 600,
    },
    o24w600: {
      fontSize: convertToRem(24),
      fontWeight: 600,
    },
    o32w600: {
      fontSize: convertToRem(32),
      fontWeight: 600,
    },
    o36w600: {
      fontSize: convertToRem(36),
      fontWeight: 600,
    },
    o40w600: {
      fontSize: convertToRem(40),
      fontWeight: 600,
    },
    o48w600: {
      fontSize: convertToRem(48),
      fontWeight: 600,
    },
    o53w600: {
      fontSize: convertToRem(53),
      fontWeight: 600,
    },
    o64w600: {
      fontSize: convertToRem(64),
      fontWeight: 600,
    },
    o90w600: {
      fontSize: convertToRem(90),
      fontWeight: 600,
    },
    o100w600: {
      fontSize: convertToRem(100),
      fontWeight: 600,
    },
    o128w600: {
      fontSize: convertToRem(128),
      fontWeight: 600,
    },
    o14w700: {
      fontSize: convertToRem(14),
      fontWeight: 700,
    },
    o15w700: {
      fontSize: convertToRem(15),
      fontWeight: 700,
      lineHeight: convertToRem(22.23),
    },
  };
};

export default createTypography;
