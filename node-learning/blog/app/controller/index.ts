import { RequestHandler } from "express";

export const healthCheckController: RequestHandler = (req, res, next) => {
  res.json({ message: "Ok" });
};
const items = [];
export const itemRegistration: RequestHandler = (req, res, next) => {
  console.log("--------    ", req);

  const { price, name } = req.body;
  items.push({
    price,
    name,
  });
  res.json({ price, name });
};

export const getListItems: RequestHandler = (req, res, next) => {
  return res.json(items);
};

export const getItemById: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  res.json(items[id] ? items[id] : null);
};

export const updateItem: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  res.json(items[id] ? items[id] : null);
};

export const deleteItem: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  res.json(items.splice(Number(id), 1));
};
