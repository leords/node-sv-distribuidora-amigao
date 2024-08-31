import { Router } from "express";
import { GetClientBaseController } from "../controller/client/getClientBaseController.js";


const router = Router();

router.get('/get-clients', new GetClientBaseController().handle);


export { router as clientRouter } 