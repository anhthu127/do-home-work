export const ControllerHandler = f => async (req, res, next) => {
    try {
      await f(req, res, next);
      // ghi log in here
      // vd: lấy thông tin muốn ghi ra từ req
      
    } catch (error) {
      next(error);
    }
  };