import { Router } from "express";
import { GetProductBaseController } from "../controller/product/getProductBaseController.js";

const router = Router();

router.get("/get-products", new GetProductBaseController().handle);

export { router as productRouter };
