export const ControllerHandler = f => async (req, res, next) => {
    try {
      await f(req, res, next);
    } catch (error) {
      next(error);
    }
  };