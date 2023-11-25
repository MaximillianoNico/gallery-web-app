import { BASE_URL } from './constant';

const getCommentsByImageId = async (imageId: string) => {
  try {
    const request = await fetch(
      `${BASE_URL}/comments/details/${imageId}`
    );

    const response = await request.json();

    return [null, response];
  } catch (err) {
    return [err, null];
  }
}


export default {
  getCommentsByImageId
}