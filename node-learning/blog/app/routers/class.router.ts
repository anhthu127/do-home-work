import { Router } from "express";
import { addClass, getClassList } from "../controllers/school.controller";
import { ControllerHandler } from "../middlewares/controller-handler.middleware";

const router = Router();

router.post("/class", ControllerHandler(addClass));
router.get("/class", getClassList);

export default router;
