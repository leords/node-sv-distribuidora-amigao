import { Router } from "express";
import { CreateItemController } from "../controller/item/createItemController.js";

const router = Router();

router.post('/create-item', new CreateItemController().handle);

export { router as itemRouter }