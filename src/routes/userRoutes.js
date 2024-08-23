import { Router } from "express";
import { CreateUserController } from "../controller/user/createUserController.js";
import { DeleteUserController } from "../controller/user/deleteUserController.js";
import { UpdateUserController } from "../controller/user/updateUserController.js";

const router = Router();

router.post('/new-user', new CreateUserController().handle);
router.post('/delete-user', new DeleteUserController().handle);
router.post('/update-user-access', new UpdateUserController().handleUpdateAcessLevel);
router.post('/update-user-profession', new UpdateUserController().handleUpdateProfessionId);

export {router as userRouter}