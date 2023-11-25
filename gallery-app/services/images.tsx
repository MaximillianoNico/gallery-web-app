import { BASE_URL } from './constant';

const getImages = async () => {
  try {
    const request = await fetch(
      `${BASE_URL}/images`
    );

    const response = await request.json();

    return [null, response];
  } catch (err) {
    return [err, null];
  }
}

interface IUploadImage {
  username: string;
  description: string;
  imageUrl: string;
}

const uploadImage = async (payload: IUploadImage) => {
  try {
    const request = await fetch(
      `${BASE_URL}/images/add`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const response = await request.json();

    return [null, response]
  } catch (err) {
    return [err, null]
  }
}

const getImageById = async (imageId: string) => {
  try {
    console.log('endpoint: ', `${BASE_URL}/images/detail/${imageId}`)
    const request = await fetch(
      `${BASE_URL}/images/detail/${imageId}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'json/applications',
          'Content-Type': 'json/applications'
        }
      }
    );

    if (!request.ok) {
      throw new Error('Failed to fetch')
    }

    const response = await request.json();

    return [null, response];
  } catch (err) {
    return [err, null];
  }
}

export default {
  getImages,
  getImageById,
  uploadImage
}