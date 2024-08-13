import { Router } from "express";
import { CreateUserController } from "./controller/user/createUserController.js";

const router = Router();

//rotas
router.post('/new-user', new CreateUserController().handle)


export {router}