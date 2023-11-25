import { useState } from 'react';

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
    const cloudName = "dm5cbnbea";

    const data = new FormData();
    if (file) data.append("file", file);
    
    data.append("upload_preset", "txackjwh");

    try {
      const request = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: 'POST', body: data }
      );

      const response = await request.json();

      console.log('response: ', response?.url);
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
