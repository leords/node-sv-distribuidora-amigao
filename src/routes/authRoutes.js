import { Router } from "express";
import { AuthService } from "../auth/authService.js";
import { LoginUserController } from "../controller/user/loginUserController.js";

const router = Router();

router.post('/login', new LoginUserController().handle)

export { router as AuthRouter }