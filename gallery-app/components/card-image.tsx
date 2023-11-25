"use client"
import { FC } from 'react';
import { Image, Box } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

interface IImages {
  owner: string
  imageId: string
  imageUrl: string
}
const Component:FC<IImages> = (props) => {
  const router = useRouter();
  
  const onOpenDetail = () => router.push(`/details/${props?.imageId}`);

  return (
    <Box onClick={onOpenDetail}>
      <Image
        src={props?.imageUrl}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
    </Box>
  )
};

export default Component;
