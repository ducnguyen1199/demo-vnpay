import { Button, Stack } from '@mui/material';
import axios from 'axios';

export const CheckoutPage = () => {
  const payment = () => {
    const data = new FormData();
    data.append('ProdName', 'topup');
    data.append('ProdId', '10101');
    data.append('Amount', 'testing');
    data.append('CurrCode', '');
    data.append('FDate', 'en');
    data.append('TDate', 'en');
    data.append('CustName', 'en');
    data.append('CustEmail', 'en');
    data.append('CustMobile', 'en');
    data.append('Locale', 'en');
    data.append(
      '__RequestVerificationToken',
      '8RBaHUCb0qi5Ub1XgosHx41bYLKjlfGyvRlJG7Yy7XyF5dz47EwUuSRqIFXDgm36y91OEo1-kfGAMvYlmb7iwiqJkOAqgp6lVuzfJeXKvzD9znndMe_1k-bX58HMu-2uRAgGYrRvKPKbF6iPHvGICMP3U2x_O7tfss1WOz_ZGwc1'
    );
    axios.post('https://sandbox.vnpayment.vn/merchantv2/PaymentLink/Create.htm', { data });
  };

  return (
    <Stack direction={'row'} gap={'57px'}>
      <Button onClick={payment}>Payment here!</Button>
    </Stack>
  );
};
