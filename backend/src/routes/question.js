import { Router } from "express";
import * as questionController from "../controllers/question.js";

export const router = Router();

router.post('/', questionController.create);

export default router;