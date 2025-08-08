import { Router } from "express";
import { CreateCartController } from "../controller/cart/createCartController.js";
import { DeleteCartController } from "../controller/cart/deleteCartController.js";
import { ReadCartController } from "../controller/cart/readCartController.js";
import { UpdateStatusCartController } from "../controller/cart/updateStatusCartController.js";
import { InsertLoadToCartController } from "../controller/cart/insertCartToLoadController.js";
import { DeleteCartToLoadController } from "../controller/cart/deleteCartToLoadController.js";
import { UpdatePaymentCartController } from "../controller/cart/updatePaymentCartController.js";

const router = Router();

router.post("/create-cart", new CreateCartController().handle);
router.delete("/delete-cart", new DeleteCartController().handle);
router.get("/read-cart", new ReadCartController().handle);
router.patch("/update-status-cart", new UpdateStatusCartController().handle);
router.patch("/insert-cart", new InsertLoadToCartController().handle);
router.patch("/delete-cart-to-load", new DeleteCartToLoadController().handle);
router.patch("/update-payment-cart", new UpdatePaymentCartController().handle);

export { router as cartRouter };
