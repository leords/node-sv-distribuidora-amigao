import { Router } from "express";
import { userRouter } from "./userRoutes.js";
import { professionRouter } from "./professionRoutes.js";
import { clientRouter } from "./clientRoutes.js";
import { productRouter } from "./productRoutes.js";
import { itemRouter } from "./itemRoutes.js";
import { cartRouter } from "./cartRoutes.js";
import { paymentMethodRouter } from "./paymentMethodRoutes.js";
import { paymentRouter } from "./paymentRoutes.js";
import { vehicleRouter } from "./vehicleRoutes.js";
import { loadRouter } from "./loadRoutes.js";
import { AuthRouter } from "./authRoutes.js";
import { transactionRouter } from "./transactionRoutes.js";

const router = Router();

router.use(AuthRouter);
router.use(userRouter);
router.use(professionRouter);
router.use(clientRouter);
router.use(productRouter);
router.use(itemRouter);
router.use(cartRouter);
router.use(paymentMethodRouter);
router.use(paymentRouter);
router.use(vehicleRouter);
router.use(loadRouter);
router.use(transactionRouter);

export { router };
