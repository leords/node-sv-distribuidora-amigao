import { Router } from "express";
import { CreatePaymentMethodController } from "../controller/paymentMethod/createPaymentMethodController.js";
import {ReadPaymentMethodController} from "../controller/paymentMethod/readPaymentMethodController.js"

const router = Router();

router.post("/create-payment", new CreatePaymentMethodController().handle);
router.get("/read-payments", new ReadPaymentMethodController().handle)

export { router as paymentMethodRouter };
