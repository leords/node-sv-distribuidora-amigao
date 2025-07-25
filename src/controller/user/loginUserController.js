import { AuthService } from "../../auth/authService.js";
import {
  ERROR_MESSAGES_USER,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";
import { handleErros } from "../../utils/errorHandler.js";

class LoginUserController {
  async handle(req, res) {
    const { email, password } = req.body;
    try {
      // validar todos os dados da requicição
      if (!email || typeof email != "string") {
        throw new Error(
          `${ERROR_MESSAGES_USER.INVALID_EMAIL} e ${ERROR_MESSAGES_USER.INVALID_EMAIL_TYPE}`
        );
      }
      if (!password || typeof password !== "string") {
        throw new Error(
          `${ERROR_MESSAGES_USER.INVALID_PASSWORD} e ${ERROR_MESSAGES_USER.INVALID_PASSWORD_TYPE}`
        );
      }

      const service = new AuthService();
      const result = await service.login(email, password);

      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      console.log("erro: ", error); // pq o erro retornou só quando adicionei o console.log, nao teria que vir no return?
      const { status, message } = handleErros(error);
      console.log("🪵 status e message:", status, message);
      return res.status(status).json({ error: message });
    }
  }
}

export { LoginUserController };
