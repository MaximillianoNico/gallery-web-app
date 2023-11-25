import { FC } from 'react';
import { Image, Box, Show } from '@chakra-ui/react'
import ButtonBack from '@/components/button-back';
import Comments from './partials/comment';

interface IImageDetail {
  imageUrl: string;
  imageId: string;
}

const Page:FC<IImageDetail> = (props) => {
  return (
    <Box>
      <Show breakpoint='(max-width: 400px)'>
        <Box position="absolute" top={10} left={6}>
          <ButtonBack />
        </Box>
      </Show>
      <Box
        display="grid"
        gridTemplateColumns={{
          xl: "50% 50%",
          md: "50% 50%",
          base: "auto"
        }}
        columnGap={6}
        rowGap={6}
        marginTop={20}
      >
        <Box>
          <Image
            src={props?.imageUrl}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
        </Box>
        <Comments imageId={props?.imageId} />
      </Box>
    </Box>
  )
}

export default Page;
