import { ERROR_MESSAGES_USER, HTTP_STATUS_CODES, SUCESS_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import { UpdateUserService } from "../../service/user/updateUserService.js";
import { handleErros } from "../../utils/errorHandler.js";



class UpdateUserController {
    async handleUpdateAcessLevel(req, res) {
        const {id, accessLevel} = req.body;

        try {
            if(!id || accessLevel === undefined) {
                throw new Error(ERROR_MESSAGES_USER.ERROR_REQ);
            }

            if(typeof id !== 'number') {
                throw new Error(ERROR_MESSAGES_USER.INVALID_TYPE_ID);
            }

            if(typeof accessLevel !== 'string') {
                throw new Error(ERROR_MESSAGES_USER.INVALID_TYPE_ACCESSLEVEL)
            }

            const service = new UpdateUserService();
            const result = await service.executeUpdateAcessLevel(id, accessLevel);

            return res.status(HTTP_STATUS_CODES.OK).json({
                message: SUCESS_MESSAGES_USER.USER_UPDATED,
                user: result
            });

        } catch (error) {
            const {status, user} = handleErros(error);
            return res.status(status).json({user});
        }
    }

    async handleUpdateProfessionId(req, res) {
        const {id, professionId} = req.body;

        try {
            if(!id || professionId === undefined) {
                throw new Error(ERROR_MESSAGES_USER.ERROR_REQ);
            }

            const service = new UpdateUserService();
            const result = await service.executeUpdateProfessionId(id, professionId);

            return res.status(HTTP_STATUS_CODES.OK).json({
                message: SUCESS_MESSAGES_USER.USER_UPDATED,
                user: result
            });

        } catch (error) {
            const {status, user} = handleErros(error);
            return res.status(status).json({user});
        }
    }
}

export { UpdateUserController }