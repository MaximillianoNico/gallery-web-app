import express, { Request, Response } from 'express';
import Images from '../../infrastructure/repository/mongo/Images';

const router = express.Router();
const ImagesController = () => {
  const getImages = async (req: Request, res: Response) => {
    try {
      const rows = await Images.find({});
      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: rows,
        date: new Date()
      };
  
      return res.status(200).send(data);
    } catch (err: any) {
      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        error: err?.message,
        date: new Date()
      };

      return res.status(400).send(data);
    }
  };

  const addImages = async (req: Request, res: Response) => {
    const newImagesData = {
      owner: req?.body?.username,
      imageUrl: req?.body?.imageUrl
    }

    try {
      const newImageUpload = new Images(newImagesData);
      const row = await newImageUpload.save();

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: row,
        date: new Date()
      };
  
      return res.status(200).send(data);
    } catch (err: any) {

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        error: err?.message,
        date: new Date()
      };

      return res.status(400).send(data);
    }
  }

  router.get('/', getImages)
  router.post('/add', addImages);

  return router;
}

export default ImagesController;
