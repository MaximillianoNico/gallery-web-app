"use client"
import { Box, Spinner } from '@chakra-ui/react'

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
  }
  return (
    <Box display="grid" gridTemplateColumns="auto auto" marginBottom={16} columnGap={6} rowGap={6}>
      {images.map(
        ({ _id, imageUrl, owner }: IImages, key) => (
          <CardImage
            owner={owner}
            key={key}
            imageId={_id}
            imageUrl={imageUrl}
          />
        )
      )}
    </Box>
  )
}

export default Page;
