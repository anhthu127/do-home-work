import { Router } from "express";
import {
  itemRegistration,
  getListItems,
  getItemById,
  deleteItem,
  updateItem,
} from "../controllers/item.controller";

const router = Router();

router.post("/item", itemRegistration);
router.get("/items", getListItems);
router.get("/item/:id", getItemById);
router.patch("/item/:id", updateItem);
router.delete("/item/:id", deleteItem);

export default router;
