import { Router } from "express";
import { addClass, getClassList } from "../controllers/school.controller";
import { controllerHandler } from "../middlewares/controller-handler.middleware";

const router = Router();

router.post("/class", controllerHandler(addClass));
router.get("/class", getClassList);

export default router;
