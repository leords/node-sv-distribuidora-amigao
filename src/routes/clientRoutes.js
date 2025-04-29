import { Router } from "express";
import { GetClientBaseController } from "../controller/client/getClientBaseController.js";
import { ReadClientController } from "../controller/client/readClientController.js"

const router = Router();

router.get("/get-clients", new GetClientBaseController().handle);
router.get("/read-clients", new ReadClientController().handle);  

export { router as clientRouter };
