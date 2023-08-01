import { Box, Stack, Typography } from '@mui/material';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { colors } from '~theme/colors';
import { DeliveryMethods } from './DeliveryMethods';
import { Payment } from './Payment';
import { PaymentView } from './PaymentView';
import { ReviewPayment } from './ReviewPayment';
import { ShippingDetail } from './ShippingDetail';
import { ShippingDetailView } from './ShippingDetailView';

type TPaymentStepByStepProps = {
  isCompleted: boolean;
  onCompleted: () => void;
};

const STEPS = {
  SHIPPING: 0,
  DELIVERY_METHOD: 1,
  PAYMENT: 2,
  REVIEW: 3,
} as const;

export const PaymentStepByStep: FC<TPaymentStepByStepProps> = ({ isCompleted, onCompleted }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const refSteps = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (currentStep === STEPS.REVIEW) {
      onCompleted();
    }
  }, [currentStep, onCompleted]);

  const changeStep = useCallback((step: number) => {
    setCurrentStep(step);
    if (step === STEPS.REVIEW) step = STEPS.SHIPPING;
    if (refSteps.current[step]) {
      setTimeout(() => {
        refSteps.current[step].scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, []);

  return (
    <Stack>
      <Box ref={(ref: HTMLDivElement) => (refSteps.current[0] = ref)}>
        <Typography fontSize={'40px'} fontWeight={500} mb={'35px'}>
          Shipping Details
        </Typography>
        {currentStep === 0 && (
          <ShippingDetail onContinue={() => changeStep(STEPS.DELIVERY_METHOD)} />
        )}
        {currentStep > 0 && (
          <ShippingDetailView onEdit={() => changeStep(STEPS.SHIPPING)} editable={!isCompleted} />
        )}
        <Box my={'30px'} height={'0.5px'} width={'100%'} bgcolor={colors['#ACA991BD']} />
      </Box>
      <Box ref={(ref: HTMLDivElement) => (refSteps.current[1] = ref)}>
        <Typography fontSize={'40px'} fontWeight={500} mb={'35px'}>
          Delivery method
        </Typography>
        {currentStep === 1 && <DeliveryMethods onContinue={() => changeStep(STEPS.PAYMENT)} />}
        {/* {currentStep > 1 && <DeliveryMethodsView onContinue={() => changeStep(2)} editable={!isCompleted} />} */}
        <Box my={'30px'} height={'0.5px'} width={'100%'} bgcolor={colors['#ACA991BD']} />
      </Box>
      <Box ref={(ref: HTMLDivElement) => (refSteps.current[2] = ref)}>
        <Typography fontSize={'40px'} fontWeight={500} mb={'35px'}>
          Payment
        </Typography>
        {currentStep === 2 && <Payment onContinue={() => changeStep(STEPS.REVIEW)} />}
        {currentStep > 2 && (
          <PaymentView onEdit={() => changeStep(STEPS.PAYMENT)} editable={!isCompleted} />
        )}
        <Box my={'30px'} height={'0.5px'} width={'100%'} bgcolor={colors['#ACA991BD']} />
      </Box>
      <Box ref={(ref: HTMLDivElement) => (refSteps.current[3] = ref)}>
        <Typography fontSize={'40px'} fontWeight={500} mb={'35px'}>
          Review & Place order
        </Typography>
        {currentStep === 3 && <ReviewPayment />}
      </Box>
    </Stack>
  );
};
