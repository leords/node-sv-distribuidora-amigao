import { Router } from "express";
import { CreatePaymentController } from '../controller/payment/createPaymentController.js'

const router = new Router();

router.post('/create-payment', new CreatePaymentController().handle);


export { router as paymentRouter }