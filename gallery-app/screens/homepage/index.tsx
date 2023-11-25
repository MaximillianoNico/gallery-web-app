import { Box } from '@chakra-ui/react'

import CardImage from '@/components/card-image'

type IImages = {
  owner: string
  imageId: string
  imageUrl: string
}

const List_Image: IImages[] = [
  {
    owner: "",
    imageId: "abc",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    owner: "",
    imageId: "abc",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    owner: "",
    imageId: "abc",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
];

const Page = () => {
  return (
    <Box display="grid" gridTemplateColumns="auto auto" columnGap={6} rowGap={6}>
      {List_Image.map(
        ({ imageId, imageUrl, owner }: IImages, key) => (
          <CardImage
            owner={owner}
            key={key}
            imageId={imageId}
            imageUrl={imageUrl}
          />
        )
      )}
    </Box>
  )
}

export default Page;
