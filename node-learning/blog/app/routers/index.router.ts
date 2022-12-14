import { Router } from "express";
import { healthCheckController } from "../controllers/item.controller";
import {
  addBulkStudentController,
  getStudentListController,
} from "../controllers/school.controller";
import { ControllerHandler } from "../middlewares/controller-handler.middleware";
import classRouter from "./class.router";
import itemRouter from "./item.router";
const router = Router();

router.get("/health-check", healthCheckController);

router.post("/student", ControllerHandler(addBulkStudentController));
router.get("/student", ControllerHandler(getStudentListController));

export default [router, classRouter, itemRouter];
