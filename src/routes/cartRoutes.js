import { Router } from "express";
import { CreateCartController } from "../controller/cart/createCartController.js";
import { DeleteCartController } from "../controller/cart/deleteCartController.js";
import { ReadCartController } from "../controller/cart/readCartController.js";
import { UpdateCartController } from "../controller/cart/updateCartController.js";
import { InsertLoadToCartController } from "../controller/cart/insertCartToLoadController.js";

const router = Router();

router.post("/create-cart", new CreateCartController().handle);
router.delete("/delete-cart", new DeleteCartController().handle);
router.get("/read-cart", new ReadCartController().handle);
router.patch("/update-cart", new UpdateCartController().handle);
router.patch("/insert-cart", new InsertLoadToCartController().handle);

export { router as cartRouter };
