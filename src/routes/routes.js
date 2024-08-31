import { Router } from "express";
import { userRouter } from "./userRoutes.js";
import { professionRouter } from "./ProfessionRoutes.js";
import { clientRouter } from "./clientRoutes.js";
import { productRouter } from "./productRoutes.js"


const router = Router();

router.use(userRouter);
router.use(professionRouter);
router.use(clientRouter);
router.use(productRouter);

export {router}