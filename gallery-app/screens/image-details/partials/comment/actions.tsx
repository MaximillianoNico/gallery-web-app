import { useEffect, useState } from "react";
import CommentService from '@/services/comments';
import { faker } from '@faker-js/faker';

interface IUseActionCommentProps {
  imageId: string
}

interface ICommentItem {
  userName: string
  comment: string
  createdAt: string
}

const useAction = (props: IUseActionCommentProps) => {
  const [comments, setComments] = useState<ICommentItem[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const GetComments = async (imageId: string) => {
      const [err, response] = await CommentService.getCommentsByImageId(imageId);

      if (!err && response) {
        setComments(response?.data);
      }
    };

    GetComments(props?.imageId);
  }, [props?.imageId]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  }

  const onEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Submit Comment
      const [err, response] = await CommentService.createNewComment(
        props?.imageId,
        newComment,
        faker.person.firstName()
      )

      if (!err && !response?.error) {
        const data = response?.data;

        setComments((prev: ICommentItem[]) => {
          return [...prev, {
            userName: data?.userName,
            comment: data?.comment,
            createdAt: data?.createdAt
          }]
        });

        setNewComment("");
      }
    }
  }

  return {
    comments,
    newComment,
    onEnter,
    onChange
  }
}

export default useAction;
