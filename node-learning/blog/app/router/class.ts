import { Router } from "express";
import { addClass, getClassList } from "../controller/school";

const router = Router();

router.post("/class", addClass);
router.get("/class", getClassList);

export default router;
