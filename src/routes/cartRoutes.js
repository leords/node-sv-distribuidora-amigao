import { Router } from "express";
import { CreateCartController } from "../controller/cart/createCartController.js";
import { DeleteCartController } from "../controller/cart/deleteCartController.js";


const router = Router();

router.post('/create-cart', new CreateCartController().handle);
router.delete('/delete-cart', new DeleteCartController().handle);


export { router as cartRouter }