import { Router } from "express";
import { CreateLoadController } from "../controller/load/createLoadController.js";
import { ReadLoadController } from "../controller/load/readLoadController.js";

const router = Router();

router.post("/new-load", new CreateLoadController().handle);
router.get("/read-load", new ReadLoadController().handle);

export { router as loadRouter };
