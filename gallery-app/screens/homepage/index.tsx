"use client"
import { Box, Spinner, Text } from '@chakra-ui/react'

import CardImage from '@/components/card-image'
import useAction from './actions'

type IImages = {
  owner: string
  _id: string
  imageUrl: string
}

const Page = () => {
  const { images, isLoading } = useAction();

  if (isLoading) {
    return (
      <Box width="100%" height="80vh" display="flex" justifyContent="center" alignItems="center">
        <Spinner />
      </Box>
    )
  };
  
  return (
    <Box display="grid" gridTemplateColumns={!!images.length ? "auto auto" : "auto"} marginBottom={16} columnGap={6} rowGap={6}>
      {!!images.length
        ? images.map(
          ({ _id, imageUrl, owner }: IImages, key) => (
            <CardImage
              owner={owner}
              key={key}
              imageId={_id}
              imageUrl={imageUrl}
            />
          )
        )
        : (
          <Box width="100%" height="100%">
            <Text textAlign="center" marginTop={50}>Images Not Found</Text>
          </Box>
        )
      }
    </Box>
  )
}

export default Page;
