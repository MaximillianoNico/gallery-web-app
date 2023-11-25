import { useEffect, useState } from "react";
import CommentService from '@/services/comments';

interface IUseActionCommentProps {
  imageId: string
}

const useAction = (props: IUseActionCommentProps) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const GetComments = async (imageId: string) => {
      const [err, response] = await CommentService.getCommentsByImageId(imageId);

      if (!err && response) {
        setComments(response?.data);
      }
    };

    GetComments(props?.imageId);
  }, [props?.imageId]);


  return {
    comments
  }
}

export default useAction;
