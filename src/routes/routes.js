import { Router } from "express";
import { userRouter } from "./userRoutes.js";
import { professionRouter } from "./ProfessionRoutes.js";


const router = Router();

router.use(userRouter);
router.use(professionRouter);

export {router}