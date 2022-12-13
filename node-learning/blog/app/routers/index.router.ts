import { Router } from "express";
import { healthCheckController } from "../controllers/item.controller";
import { addBulkStudent, getStudentList } from "../controllers/school.controller";
import classRouter from "./class.router";
import itemRouter from "./item.router";
const router = Router();

router.get("/health-check", healthCheckController);

router.post("/student", addBulkStudent);
router.get("/student", getStudentList);

export default [router, classRouter, itemRouter];
