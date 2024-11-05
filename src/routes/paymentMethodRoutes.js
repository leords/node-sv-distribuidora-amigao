import { Router } from "express";
import { CreatePaymentMethodController } from "../controller/paymentMethod/createPaymentMethodController.js";

const router = Router();

router.post("/create-payment", new CreatePaymentMethodController().handle);

export { router as paymentMethodRouter };
