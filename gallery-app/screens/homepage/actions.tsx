import { useEffect, useState } from 'react';
import ImageService from '@/services/images';

const useAction = () => {
  const [isLoading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const GetImages = async () => {
      setLoading(true);
      const [err, response] = await ImageService.getImages();

      if (!err && response) {
        setImages(response?.data);
      }

      setLoading(false);
    };

    GetImages();
  }, [])

  return {
    isLoading,
    images
  }
}

export default useAction;
