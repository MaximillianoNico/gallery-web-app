"use client"
import { Box } from '@chakra-ui/react'
import { CaretLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation'

const Component = () => {
  const router = useRouter();
  
  return (
    <Box
      width={30}
      height={30}
      borderRadius={30}
      backgroundColor={"white"}
      borderColor={"grey"}
      borderWidth={1}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      onClick={() => router.back()}
    >
      <CaretLeft size={20} />
    </Box>
  )
}

export default Component;
