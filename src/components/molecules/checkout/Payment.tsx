import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import { colors } from '~theme/colors';
import masterCard from '~assets/images/denim-page/cart/master-card.png';
import visa from '~assets/images/denim-page/cart/visa.png';
import paypal from '~assets/images/denim-page/cart/paypal.png';

type TPaymentProps = {
  onContinue: () => void;
};

export const Payment: FC<TPaymentProps> = ({ onContinue }) => {
  return (
    <Stack gap={'30px'}>
      <Box p={'25px 25px 30px 16px'} border={`1px solid ${colors['#ACA991']}`}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mb={'20px'}>
          <Stack direction={'row'} alignItems={'flex-end'} gap={'15px'}>
            <Typography fontSize={'14px'} fontWeight={400}>
              CREDIT CARD (STRIPE)
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} gap={'20px'}>
            <Image src={masterCard} alt="masterCard" />
            <Image src={visa} alt="visa" />
          </Stack>
        </Stack>
        <Stack px={'22px'} gap={'12px'}>
          <Typography fontSize={'13px'} fontWeight={300} mb={'14px'}>
            Pay with your credit card via Stripe
          </Typography>
          <Box>
            <Typography fontSize={'14px'} fontWeight={400} mb={'10px'}>
              Card number *
            </Typography>
            <input placeholder={`1234${'\xa0'.repeat(5)}`.repeat(4)} />
          </Box>
          <Grid container columnSpacing={'27px'}>
            <Grid item xs={6}>
              <Typography fontSize={'14px'} fontWeight={400} mb={'10px'}>
                Expiry Date *
              </Typography>
              <input placeholder={`MM${'\xa0'.repeat(5)}/${'\xa0'.repeat(5)}YY`} />
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={'14px'} fontWeight={400} mb={'10px'}>
                Card code (CVC)*
              </Typography>
              <input placeholder={`MM${'\xa0'.repeat(5)}/${'\xa0'.repeat(5)}YY`} />
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Box p={'25px'} pl={'16px'} border={`1px solid ${colors['#ACA991']}`}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography fontSize={'14px'}>PAYPAL</Typography>
          <Image src={paypal} alt="paypal" />
        </Stack>
      </Box>
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
    </Stack>
  );
};
