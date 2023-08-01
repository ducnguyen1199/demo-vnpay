import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { colors } from '~theme/colors';

type TPaymentViewProps = {
  onEdit: () => void;
  editable: boolean;
};

export const PaymentView: FC<TPaymentViewProps> = ({ editable, onEdit }) => {
  return (
    <Stack gap={'30px'} direction={'row'} justifyContent={'space-between'}>
      <Box>
        <Typography mb={'10px'} fontSize={'14px'}>
          CREDIT CARD
        </Typography>
        <Typography fontSize={'13px'}>XXXX XXXX XXXX 1234</Typography>
        <Typography fontSize={'13px'}>NGUYEN D THUY TRAM</Typography>
      </Box>
      {editable && (
        <Typography
          fontSize={'14px'}
          color={colors['#BE4019']}
          sx={{ cursor: 'pointer' }}
          onClick={onEdit}
        >
          EDIT CARD
        </Typography>
      )}
    </Stack>
  );
};
