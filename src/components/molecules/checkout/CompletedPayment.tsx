import { Box, Typography } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { colors } from '~theme/colors';

export const CompletedPayment = () => {
  return (
    <Box p={'25px 21px'} bgcolor={colors['#ACA991']} height={'100%'}>
      <Typography fontSize={'36px'} fontWeight={500} color={colors['#1E1E1E']} mb={'20px'}>
        Thank you for choosing us!
      </Typography>
      <Typography fontSize={'16px'} fontWeight={300} color={colors['#1E1E1E']}>
        If you have any question, please contact me at phone: <TextRed>0779 979 666</TextRed> or
        <TextRed>leave a message in my Fanpage or my Instagram</TextRed>
      </Typography>
    </Box>
  );
};

const TextRed: FC<PropsWithChildren> = ({ children }) => (
  <span style={{ color: colors['#BE4019'] }}>{children}</span>
);
