"use client"
import { Box, Input, Text, Textarea, Button, Image } from '@chakra-ui/react'
import { UploadSimple } from '@phosphor-icons/react';
import ButtonBack from '@/components/button-back';
import ImagePreview from '@/components/image-preview'
import useAction from './actions';

const Screen = () => {
  const {
    filePreview,
    imageDetail,
    onChange,
    onUploadImage,
    onSubmit
  } = useAction();

  console.log('filePreview: ', filePreview);
  return (
    <Box>
      <Box position="absolute" top={10} left={6}>
        <ButtonBack />
      </Box>
      <Box
        marginTop={20}
        position='relative'
        width="100%"
        height={200}
      >
        {filePreview
          ? <ImagePreview imageUrl={filePreview} />
          : (
            <Box
              backgroundColor={"#E8E8E8"}
              width={"100%"}
              height={"100%"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              >
              <UploadSimple size={30} color="#000000" />
            </Box>
          )}
        <Input
          position="absolute"
          type="file"
          left={0}
          right={0}
          top={0}
          bottom={0}
          opacity={0}
          height={"100%"}
          onChange={onUploadImage}
        />
      </Box>
      <Box marginTop={20}>
        <Box>
          <Text marginBottom={2}>Username</Text>
          <Input value={imageDetail.username} borderRadius={10} name="username" onChange={onChange} />
        </Box>
        <Box marginTop={4}>
          <Text marginBottom={2}>Description</Text>
          <Textarea value={imageDetail.description} borderRadius={10} name="description" onChange={onChange} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" marginTop={10}>
        <Button onClick={onSubmit} colorScheme='teal' size='lg' width="100%">
          Upload
        </Button>
      </Box>
    </Box>
  )
}

export default Screen;
