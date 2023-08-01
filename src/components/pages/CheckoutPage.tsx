import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { Container } from '~components/atoms/Container';
import { PaymentStepByStep } from '~components/molecules';
import { CompletedPayment } from '~components/molecules/checkout/CompletedPayment';

export const CheckoutPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Container pt={'100px'} pb={'73px'}>
      <Stack direction={'row'} gap={'57px'}>
        <Box width={'50%'}>
          <PaymentStepByStep isCompleted={isCompleted} onCompleted={() => setIsCompleted(true)} />
        </Box>
        <Box width={'50%'}>{isCompleted && <CompletedPayment />}</Box>
      </Stack>
    </Container>
  );
};
