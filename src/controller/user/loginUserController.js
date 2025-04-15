import { AuthService } from "../../auth/authService.js";
import { ERROR_MESSAGES_USER, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js";
import { handleErros } from "../../utils/errorHandler.js";

class LoginUserController {
    async handle(req, res) {
        const {email, password} = req.body;

        try {
            // validar todos os dados da requicição
            if(!email || typeof email != "string") {
                throw new Error(`${ERROR_MESSAGES_USER.INVALID_EMAIL} e ${ERROR_MESSAGES_USER.INVALID_EMAIL_TYPE}`);
            }
            if(!password || isNaN(password)) {
                throw new Error(`${ERROR_MESSAGES_USER.INVALID_PASSWORD} e ${ERROR_MESSAGES_USER.INVALID_PASSWORD_TYPE}`)
            }

            const service = new AuthService();
            const result = await service.login(email, password);

            return res.status(HTTP_STATUS_CODES.OK).json({result})

        } catch (error) {
            const { status, message} = handleErros(error)
            return res.status(status).json({error: message})
        }
    }
}

export { LoginUserController }