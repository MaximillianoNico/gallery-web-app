import express, { Request, Response } from 'express';
import Comments from '../../infrastructure/repository/mongo/Comment';
import Images from '../../infrastructure/repository/mongo/Images';

const router = express.Router();
const CommentController = () => {
  const addComment = async (req: Request, res: Response) => {
    const newCommentData = {
      imageId: req?.body?.imageId,
      comment: req?.body?.comment,
      userName: req?.body?.userName
    };

    try {
      const isExistsImageId = await Images.findOne({ _id: newCommentData.imageId });

      if (!isExistsImageId) {
        throw new Error("Image Id is not exists");
      }

      const newComment = new Comments(newCommentData);
      const row = await newComment.save();

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: row,
        date: new Date()
      };
  
      res.status(200).send(data);
    } catch (err: any) {
      const data = {
        uptime: process.uptime(),
        message: 'Error',
        error: err?.message,
        date: new Date()
      };

      return res.status(400).send(data);
    }
  }

  const getCommentByImageId = async (req: Request, res: Response) => {
    const imageId = req?.params?.id;

    try {
      const row = await Images.findOne({ _id: imageId });

      if (!row) {
        throw new Error("ImageId not found")
      }

      const comments = await Comments.find({ imageId });
      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: comments ?? [],
        date: new Date()
      };

      return res.status(200).send(data);
    } catch(err: any) {
      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        error: err?.message,
        date: new Date()
      };

      return res.status(400).send(data);
    }
  }

  router.get('/details/:id', getCommentByImageId);
  router.post('/add', addComment);

  return router;
}

export default CommentController;
