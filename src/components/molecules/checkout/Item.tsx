import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC, Fragment } from 'react';
import { colorNames } from '~constants/colorNames';
import { colors } from '~theme/colors';
import { TItemCart } from '~types/cart';

export const Item: FC<TItemCart> = ({ product, amount, size, color }) => {
  return (
    <Fragment key={`${product.id}_${color}_${size}`}>
      <Stack direction={'row'} gap={'26px'}>
        <Image src={product.images[0]} width={149} height={149} alt={product.name} />
        <Stack justifyContent={'space-between'}>
          <Stack direction={'row'} justifyContent={'space-between'} gap={'10px'}>
            <Typography color={colors['#1E1E1E']} fontWeight={500} fontSize={'16px'}>
              {product.name} ({colorNames[color]})
            </Typography>
            <Typography
              color={colors['#1E1E1E']}
              fontWeight={500}
              fontSize={'20px'}
              whiteSpace={'pre'}
            >
              USD ${(product.currentPrice * amount).toLocaleString()}
            </Typography>
          </Stack>
          <Box>
            <Typography fontWeight={300} fontSize={'16px'} color={colors['#1E1E1E']}>
              Size: {size}
            </Typography>
            <Typography fontWeight={300} fontSize={'16px'} color={colors['#1E1E1E']}>
              QTY: {amount}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Box my={'25px'} height={'0.5px'} width={'100%'} bgcolor={colors['#ACA991BD']} />
    </Fragment>
  );
};
