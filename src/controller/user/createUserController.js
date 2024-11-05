import { CreateUserService } from "../../service/user/createUserService.js";
import {
  ERROR_MESSAGES_USER,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_USER,
} from "../../config/httpStatusCodes.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateUserController {
  async handle(req, res) {
    const { name, email, accessLevel, password, professionId } = req.body;

    try {
      if (!name) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_NAME);
      }
      if (typeof name !== "string") {
        throw new Error(ERROR_MESSAGES_USER.INVALID_NAME_TYPE);
      }
      if (name.length < 4 && name.length > 40) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_NAME_LENGTH);
      }
      if (!email) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_EMAIL);
      }
      if (typeof email !== "string") {
        throw new Error(ERROR_MESSAGES_USER.INVALID_EMAIL_TYPE);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_EMAIL_FORMAT);
      }
      if (!accessLevel) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL);
      }
      if (typeof accessLevel !== "string") {
        throw new Error(ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL_TYPE);
      }

      const AllowedLevels = ["1", "2", "3"];

      if (!AllowedLevels.includes(accessLevel)) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_ACCESS_OPTION);
      }
      if (!password) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_PASSWORD);
      }

      if (typeof password !== "string") {
        throw new Error(ERROR_MESSAGES_USER.INVALID_PASSWORD_TYPE);
      }
      if (password.length < 8) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_PASSWORD_SHORT);
      }

      if (!professionId) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_PROFESSION_ID);
      }

      if (isNaN(professionId)) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_PROFESSION_ID_TYPE);
      }

      const service = new CreateUserService();
      const result = await service.execute(
        name,
        email,
        accessLevel,
        password,
        professionId
      );

      //retorno de usuário criado com sucesso!
      return res.status(HTTP_STATUS_CODES.CREATED).json({
        message: SUCESS_MESSAGES_USER.USER_CREATED,
        user: result,
      });
    } catch (error) {
      // Verifica o tipo de erro e retorna uma resposta específica.
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { CreateUserController };
