import { CreateUserService } from "../../service/user/createUserService.js";
import { ERROR_MESSAGES_USER, HTTP_STATUS_CODES, SUCESS_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateUserController {
    async handle(req, res) {
        const {name, email, accessLevel, password, professionId} = req.body;

        try {
            if(!name) {
                throw new Error()
            }
            if(typeof name !== 'string') {
                throw new Error()
            }
            if(name.length >= 4 && name.length <= 40) {
                throw new Error()
            }

            if(!email) {
                throw new Error()
            }
            if(typeof email !== 'string') {
                throw new Error()
            }
            const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;            
            if(!emailRegex.test(email)) {
                throw new Error(ERROR_MESSAGES_USER.INVALID_EMAIL)
            }

            if(!accessLevel) {
                throw new Error()
            } 
            if(typeof accessLevel !== 'string') {
                throw new Error()
            }
            const AllowedLevels = ['1', '2', '3']
            if(!AllowedLevels.includes(accessLevel)) {
                throw new Error(ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL)
            }

            if(!password) {
                throw new Error()
            }

            if(typeof password !== 'string') {
                throw new Error()
            }
            if(password.length < 8) {
                throw new Error(ERROR_MESSAGES_USER.SHORT_PASSWORD)
            }

            if(!professionId) {
                throw new Error()
            }

            if(isNaN(professionId)) {
                throw new Error()
            }


            const service = new CreateUserService();
            const result = await service.execute(name, email, accessLevel, password, professionId)
 

            //retorno de usuário criado com sucesso!
            return res.status(HTTP_STATUS_CODES.CREATED).json({
                message: SUCESS_MESSAGES_USER.USER_CREATED,
                user: result
            });
            
        } catch (error) {
            // Verifica o tipo de erro e retorna uma resposta específica.
            const { status, message } = handleErros(error);
            return res.status(status).json({error:message}); 
        }
    }
} 


export { CreateUserController }