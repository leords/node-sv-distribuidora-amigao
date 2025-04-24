import { Router } from "express";
import { GetProductBaseController } from "../controller/product/getProductBaseController.js";
import { ReadProductController } from "../controller/product/readProductController.js";

const router = Router();

router.get("/get-products", new GetProductBaseController().handle);
router.get("/read-products", new ReadProductController().handle);

export { router as productRouter };
