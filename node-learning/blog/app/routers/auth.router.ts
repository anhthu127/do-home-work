import { Router } from "express";
import { accountRegistration } from "../controllers/auth.controller";
import { ControllerHandler } from "../middlewares/controller-handler.middleware";

const router = Router();

router.post("/register", ControllerHandler(accountRegistration));
export default router;
