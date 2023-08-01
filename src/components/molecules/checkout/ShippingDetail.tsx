import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { colors } from '~theme/colors';

type TShippingDetailProps = {
  onContinue: () => void;
};

export const ShippingDetail: FC<TShippingDetailProps> = ({ onContinue }) => {
  return (
    <Grid container rowSpacing={'30px'} columnSpacing={'20px'}>
      <Grid item xs={6}>
        <input placeholder="Frist name" />
      </Grid>
      <Grid item xs={6}>
        <input placeholder="Last name" />
      </Grid>
      <Grid item xs={6}>
        <input placeholder="Email Addess" />
      </Grid>
      <Grid item xs={6}>
        <input placeholder="Phone" />
      </Grid>
      <Grid item xs={12}>
        <input placeholder="Street Addess" />
      </Grid>
      <Grid item xs={6}>
        <input placeholder="Postcode / ZIP" />
      </Grid>
      <Grid item xs={6}>
        <input placeholder="Town / City" />
      </Grid>
      <Grid item xs={12}>
        TYPE OF ADDRESS
      </Grid>
      <Grid item xs={12}>
        <Stack gap={'12px'}>
          <Stack direction={'row'} alignItems={'center'} gap={'50px'}>
            <Typography>Residence</Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} gap={'50px'}>
            <Typography>Business</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            fontSize: '13px',
            color: colors['#1E1E1E'],
            background: colors['#FFFFFF'],
            cursor: 'pointer',
          }}
          py={'16px'}
          textAlign={'center'}
          onClick={onContinue}
        >
          Continue
        </Box>
      </Grid>
    </Grid>
  );
};
