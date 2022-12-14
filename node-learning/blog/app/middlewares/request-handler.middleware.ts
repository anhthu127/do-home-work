import { commonResponse } from "../utils/common-response";

export const errorHandler = (error, req, res, next) => {
    if (typeof error === 'string') {
      res.status(400);
      res.send(commonResponse(null, 2, error))
    } else {
      let code = -1;
      let message = 'unknown-error';
      if (error.status >= 400 && error.status <= 499) {
        code = 1;
        message = 'client-error';
      } else {
        console.log(error)
        code = 2;
        message = 'server-error'
      }
      res.status(error.status || 500);
  
      res.send(commonResponse(null, code, error?.message))
    }
  };
  