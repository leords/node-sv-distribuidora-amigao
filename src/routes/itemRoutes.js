import { Router } from "express";
import { CreateItemController } from "../controller/item/createItemController.js";
import { DeleteItemController } from "../controller/item/deleteItemController.js";
import { UpdateItemController } from "../controller/item/updateItemController.js";

const router = Router();

router.post("/create-item", new CreateItemController().handle);
router.delete("/delete-item", new DeleteItemController().handler);
router.patch("/update-item-quantify", new UpdateItemController().handle);

export { router as itemRouter };
