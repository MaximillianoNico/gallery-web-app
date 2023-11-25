import { useState } from 'react';
import ImageService from '@/services/images';
import { useToast } from '@chakra-ui/react'

interface IFormImage {
  username: string;
  description: string;
}

const useAction = () => {
  const [file, setFile] = useState<File | string>();
  const [filePreview, setFilePreview] = useState<string | undefined>();
  const [imageDetail, setImageDetail] = useState<IFormImage>({
    username: "",
    description: ""
  })

  const toast = useToast()

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      const file = e?.target?.files?.[0];

      if (file && filePreview) {
        URL.revokeObjectURL(filePreview);
      }

      const objectUrl = URL.createObjectURL(file)

      setFile(e?.target?.files?.[0]);
      setFilePreview(objectUrl);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setImageDetail(
      prev => ({
        ...prev,
        [e.target.name]: e.target.value
      })
    )
  }

  const onSubmit = async () => {
    const cloudName = process?.env?.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME;

    const data = new FormData();
    if (file) data.append("file", file);
    
    data.append("upload_preset", process?.env?.NEXT_PUBLIC_CLOUDINARY_UPLOADPRESET ?? "");

    try {
      const request = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: data
        }
      );

      const response = await request.json();

      const [err, responseUpload] = await ImageService.uploadImage({
        ...imageDetail,
        imageUrl: response?.url
      })

      if (!err && responseUpload) {
        toast({
          title: 'Image Uploaded',
          status: 'success',
          duration: 1500,
          isClosable: true,
        })
      }
    } catch (err) {
      console.log('err: ', err);
    }
  }

  return {
    file,
    imageDetail,
    filePreview,
    onChange,
    onUploadImage,
    onSubmit
  }
}

export default useAction;
