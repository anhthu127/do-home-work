import { Router } from "express";
import { healthCheckController } from "../controller";

const router = Router();

router.get("/health-check", healthCheckController);

export default router;
