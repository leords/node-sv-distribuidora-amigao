import { response } from "express";
import { deleteUserService } from "../../service/user/deleteUserService.js";
import { ERROR_MESSAGES_USER, HTTP_STATUS_CODES, SUCESS_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import { handleErros } from "../../utils/errorHandler.js";


class deleteUserController {
    async handle(req, res) {
        try {
            const {id} = req.body;
            

            //verificar se o id é válido!!
            if(!id) {
                throw new Error(ERROR_MESSAGES_USER.ERROR_REQ);
            }

            const service = new deleteUserService();
            const result = await service.execute(id);

            return res.status(HTTP_STATUS_CODES.CREATED).json({
                message: SUCESS_MESSAGES_USER.USER_DELETED ,
                user: result
            });

        } catch (error) {
            //chamar função para verificar o erro: 
            const { status, message } = handleErros(error);
            return res.status(status).json({message});
        }
    }
}

export { deleteUserController }