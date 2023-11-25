import { FC } from 'react';
import { Image, Box, Text, Show } from '@chakra-ui/react'
import ButtonBack from '@/components/button-back';

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
        <Box>
          <Text fontSize={32}>Comments</Text>
          <Box display="grid" gridTemplateColumns="50px auto" margin="10px 0px">
            <Box width={30} height={30} borderRadius="30" backgroundColor="gray" display="flex" justifyContent={"center"} alignItems={"center"}>
              <Text fontSize={12} textAlign="center" color="white">M</Text>
            </Box>
            <Box>
              <Box display={"flex"}>
                <Text fontSize={14} fontWeight="bold">Username</Text>
                <Text marginLeft={2} fontSize={14}>Test</Text>
              </Box>
              <Box>
                <Text fontSize={12}>1 day ago</Text>
              </Box>
            </Box>
          </Box>

          <Box display="grid" gridTemplateColumns="50px auto" margin="10px 0px">
            <Box width={30} height={30} borderRadius="30" backgroundColor="gray" display="flex" justifyContent={"center"} alignItems={"center"}>
              <Text fontSize={12} textAlign="center" color="white">M</Text>
            </Box>
            <Box>
              <Box display={"flex"}>
                <Text fontSize={14} fontWeight="bold">Username</Text>
                <Text marginLeft={2} fontSize={14}>Test</Text>
              </Box>
              <Box>
                <Text fontSize={12}>1 day ago</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Page;
