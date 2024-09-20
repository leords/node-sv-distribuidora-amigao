import { DeleteUserService } from "../../service/user/deleteUserService.js";
import { ERROR_MESSAGES_USER, HTTP_STATUS_CODES, SUCESS_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import { handleErros } from "../../utils/errorHandler.js";


class DeleteUserController {
    async handle(req, res) {
        const {id} = req.body;
        try {            
            //verifica se o id não é nulo!
            if(!id) {
                throw new Error(ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY);
            }
            //verifica se o id é do tipo number!
            if(typeof id !== 'number') {
                throw new Error(ERROR_MESSAGES_USER.INVALID_TYPE_ID);
            }

            const service = new DeleteUserService();
            const result = await service.execute(id);

            return res.status(HTTP_STATUS_CODES.OK).json({
                message: SUCESS_MESSAGES_USER.USER_DELETED ,
                user: result
            });

        } catch (error) {
            //chamando a função que verifica e trata os erros: 
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message});
        }
    }
}

export { DeleteUserController }