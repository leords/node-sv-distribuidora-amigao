import { Router } from "express";
import { userRouter } from "./userRoutes.js";
import { professionRouter } from "./professionRoutes.js";
import { clientRouter } from "./clientRoutes.js";
import { productRouter } from "./productRoutes.js"
import { itemRouter } from "./itemRoutes.js";
import { cartRouter } from "./cartRoutes.js";


const router = Router();

router.use(userRouter);
router.use(professionRouter);
router.use(clientRouter);
router.use(productRouter);
router.use(itemRouter);
router.use(cartRouter);

export {router}