import healthCheck from './routes/healthcheck';
import { IMainRoute } from './types'

const Interface = ({ app }: IMainRoute) => {

  app.use('/app', healthCheck());

  /**
   * Catch 404 and forward to error handle.
   */
  app.use((req, res, next) => {
    let err = {
      message: new Error('Not Found'),
      status: 404
    }
    
    next(err);
  });
}

export default Interface;
