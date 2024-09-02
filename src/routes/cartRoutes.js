import { Router } from "express";
import { CreateCartController } from "../controller/cart/createCartController.js";


const router = Router();

router.post('/create-cart', new CreateCartController().handle)


export { router as cartRouter }