import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { colors } from '~theme/colors';

type TShippingDetailViewProps = {
  onEdit: () => void;
  editable: boolean;
};

export const ShippingDetailView: FC<TShippingDetailViewProps> = ({ editable, onEdit }) => {
  return (
    <Stack gap={'30px'} direction={'row'} justifyContent={'space-between'}>
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
