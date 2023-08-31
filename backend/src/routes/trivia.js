import { Router } from "express";
import * as triviaController from "../controllers/trivia.js";

export const router = Router();

router.get('/', triviaController.get);

export default router;