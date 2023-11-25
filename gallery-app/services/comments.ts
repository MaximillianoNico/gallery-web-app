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

const createNewComment = async (imageId: string, comment: string, userName: string) => {
  const payload = {
    imageId,
    comment,
    userName
  }

  try {
    const request = await fetch(
      `${BASE_URL}/comments/add`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const response = await request.json();

    return [null, response];
  } catch (err) {
    return [err, null]
  }
}

export default {
  getCommentsByImageId,
  createNewComment
}