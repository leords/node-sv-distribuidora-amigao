import { Router } from "express";
import { CreateItemController } from "../controller/item/createItemController.js";
import { DeleteUniqueItemController } from "../controller/item/deleteUniqueItemController.js";
import { UpdateItemController } from "../controller/item/updateItemController.js";
import { DeleteManyItemController } from "../controller/item/deleteManyItemController.js";
import { ReadItemController } from "../controller/item/readItemController.js";

const router = Router();

router.post("/create-item", new CreateItemController().handle);
router.delete("/delete-unique-item", new DeleteUniqueItemController().handle);
router.delete("/delete-many-item", new DeleteManyItemController().handle);
router.patch("/update-item-quantify", new UpdateItemController().handle);
router.get("/read-item", new ReadItemController().handle)

export { router as itemRouter };
