import { Router } from "express";
import { healthCheckController } from "../controller";
import { addBulkStudent, getStudentList } from "../controller/school";
import classRouter from "./class";
import itemRouter from "./item";
const router = Router();

router.get("/health-check", healthCheckController);

router.post("/student", addBulkStudent);
router.get("/student", getStudentList);

export default [router, classRouter, itemRouter];
