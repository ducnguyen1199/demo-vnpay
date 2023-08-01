import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

export const ReviewPayment: FC = () => {
  return (
    <Stack gap={'30px'}>
      <Box>
        <Typography mb={'10px'} fontSize={'14px'}>
          SHIPPING ADDRESS
        </Typography>
        <Typography fontSize={'13px'}>Amour de Fleur</Typography>
        <Typography fontSize={'13px'}>
          Amour de Fleur nguyen huu canh, hồ chí minh, 700000, Vietnam
        </Typography>
        <Typography fontSize={'13px'}>0906663990</Typography>
      </Box>
      <Box>
        <Typography mb={'10px'} fontSize={'14px'}>
          CREDIT CARD
        </Typography>
        <Typography fontSize={'13px'}>XXXX XXXX XXXX 1234</Typography>
        <Typography fontSize={'13px'}>NGUYEN D THUY TRAM</Typography>
      </Box>
    </Stack>
  );
};
