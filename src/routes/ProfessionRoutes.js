import { Router } from "express";
import { CreateProfessionController } from "../controller/profession/createProfessionController.js";
import { DeleteProfessionController } from "../controller/profession/deleteProfessionController.js";
import { ReadProfessionController } from "../controller/profession/readProfessionController.js";


const router = Router();

router.post('/create-profession', new CreateProfessionController().handle);
router.post('/delete-profession', new DeleteProfessionController().handle);
router.get('/read-profession', new ReadProfessionController().handle);

export { router as professionRouter }