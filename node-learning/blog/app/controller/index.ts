import { RequestHandler } from "express";

export const healthCheckController: RequestHandler = (req, res, next) => {
  res.json({ message: "Ok" });
};
