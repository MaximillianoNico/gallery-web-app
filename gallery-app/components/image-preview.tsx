import { Box, Image } from '@chakra-ui/react'
import { FC } from 'react';

interface IImagePreview {
  imageUrl: string
  width?: number | string
}

const Component:FC<IImagePreview> = (props) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Image width={props?.width ?? 200} src={props?.imageUrl} />
    </Box>
  )
}

export default Component;
