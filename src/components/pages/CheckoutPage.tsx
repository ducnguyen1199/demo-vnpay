import { Box, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { Container } from '~components/atoms/Container';
import { PaymentStepByStep } from '~components/molecules';
import { CompletedPayment } from '~components/molecules/checkout/CompletedPayment';
import { sha256 } from 'js-sha256';

export const CheckoutPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const payment = () => {
    const hash = sha256('');
    const time = new Date();

    window.open(
      `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=1806000&vnp_Command=pay&vnp_CreateDate=${time.getTime()}&vnp_CurrCode=VND&vnp_IpAddr=127.0.0.1&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+don+hang+%3A5&vnp_OrderType=other&vnp_ReturnUrl=https%3A%2F%2Fdomainmerchant.vn%2FReturnUrl&vnp_TmnCode=DEMOV210&vnp_TxnRef=5&vnp_Version=2.1.0&vnp_SecureHash=${hash}`
    );
  };

  return (
    <Container pt={'100px'} pb={'73px'}>
      <Stack direction={'row'} gap={'57px'}>
        <Box width={'50%'}>
          <PaymentStepByStep isCompleted={isCompleted} onCompleted={() => setIsCompleted(true)} />
        </Box>
        <Box width={'50%'}>{isCompleted && <CompletedPayment />}</Box>
        <Button onClick={payment}>Payment here!</Button>
      </Stack>
    </Container>
  );
};
