import { Router } from "express";
import { CreatePaymentController } from "../controller/payment/createPaymentController.js";
import { DeletePaymentController } from "../controller/payment/deletePaymentController.js";
import { ReadPaymentController } from "../controller/payment/readPaymentController.js";
import { CalculatePaymentController } from "../controller/payment/calculatePaymentController.js";


const router = Router();

router.post('/new-payment', new CreatePaymentController().handle)
router.delete('/delete-payment', new DeletePaymentController().handle)
router.get('/read-payment', new ReadPaymentController().handle)
router.get('/calculate-payment', new CalculatePaymentController().handle)


export { router as paymentRouter } 