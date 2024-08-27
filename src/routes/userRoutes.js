import { Router } from "express";
import { CreateUserController } from "../controller/user/createUserController.js";
import { DeleteUserController } from "../controller/user/deleteUserController.js";
import { UpdateUserController } from "../controller/user/updateUserController.js";
import { ReadUserController } from "../controller/user/readUserController.js";

const router = Router();

router.post('/new-user', new CreateUserController().handle);
router.delete('/delete-user', new DeleteUserController().handle);
router.patch('/update-user-access', new UpdateUserController().handleUpdateAcessLevel);
router.patch('/update-user-profession', new UpdateUserController().handleUpdateProfessionId);
router.patch('/update-user', new UpdateUserController().handleUpdateStatus);
router.get('/read-users', new ReadUserController().handleReadAnyUsers);
router.get('/read-user/:id', new ReadUserController().handleReadUniqueUser);

export {router as userRouter}