import { Router } from "express";
import { CreateUserController } from "./controller/user/createUserController.js";
import { deleteUserController } from "./controller/user/deleteUserController.js";

const router = Router();

//rotas
router.post('/new-user', new CreateUserController().handle)
router.post('/delete-user', new deleteUserController().handle)


export {router}