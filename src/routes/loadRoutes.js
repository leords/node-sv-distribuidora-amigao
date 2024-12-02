import { Router } from "express";
import { CreateLoadController } from "../controller/load/createLoadController.js";
import { ReadLoadController } from "../controller/load/readLoadController.js";
import { UpdateLoadController } from "../controller/load/updateLoadController.js";
import { DeleteLoadController } from "../controller/load/deleteLoadController.js";

const router = Router();

router.post("/new-load", new CreateLoadController().handle);
router.get("/read-load", new ReadLoadController().handle);
router.patch("/edit-load-name", new UpdateLoadController().handleUpdateName);
router.patch(
  "/edit-load-status",
  new UpdateLoadController().handleUpdateStatus
);
router.patch("/edit-load-user", new UpdateLoadController().handleUpdateUser);
router.patch(
  "/edit-load-vehicle",
  new UpdateLoadController().handleUpdateVehicle
);
router.delete("/delete-load", new DeleteLoadController().handle);

export { router as loadRouter };
