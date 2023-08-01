import { Button, Stack } from '@mui/material';
import { sha256 } from 'js-sha256';

export const CheckoutPage = () => {
  const payment = () => {
    const hash = sha256(crypto.randomUUID());
    const time = new Date();

    window.open(
      `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=1806000&vnp_Command=pay&vnp_CreateDate=${time.getTime()}&vnp_CurrCode=VND&vnp_IpAddr=127.0.0.1&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+don+hang+%3A5&vnp_OrderType=other&vnp_ReturnUrl=https%3A%2F%2Fdomainmerchant.vn%2FReturnUrl&vnp_TmnCode=DEMOV210&vnp_TxnRef=5&vnp_Version=2.1.0&vnp_SecureHash=${hash}`
    );
  };

  return (
    <Stack direction={'row'} gap={'57px'}>
      <Button onClick={payment}>Payment here!</Button>
    </Stack>
  );
};
