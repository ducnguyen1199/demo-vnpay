import { Box } from '@mui/material';
import React, { FC } from 'react';
import { colors } from '~theme/colors';

type TDeliveryMethodsProps = {
  onContinue: () => void;
};

export const DeliveryMethods: FC<TDeliveryMethodsProps> = ({ onContinue }) => {
  return (
    <div>
      DeliveryMethods
      <Box
        mt={'30px'}
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
    </div>
  );
};
