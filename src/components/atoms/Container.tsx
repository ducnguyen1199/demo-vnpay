import { Box, BoxProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren, BoxProps {}

const Container = ({ children, ...props }: Props) => {
  return (
    <Box
      width="100%"
      maxWidth={1200}
      margin="0 auto"
      pl={{
        md: '20px',
        xs: '16px',
      }}
      pr={{
        md: '50px',
        xs: '35px',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export { Container };
