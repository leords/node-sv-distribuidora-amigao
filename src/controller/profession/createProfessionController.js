import { ERROR_MESSAGES_PROFISSION, HTTP_STATUS_CODES, SUCESS_MESSAGES_PROFISSION } from "../../config/httpStatusCodes.js";
import { Profession } from "../../models/profession.js";
import { CreateProfessionService } from "../../service/profession/createProfessionService.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateProfessionController {
    async handle(req, res) {
        const {description} = req.body;
            try {
            
            if(!description) {
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
                    error: ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_EMPTY
                });
            }
            if(typeof description !== 'string') {
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
                    error: ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID
                });
            }

            const professionModel = new Profession(description);
            const service = new CreateProfessionService();
            const result = await service.execute(professionModel.description);

            return res.status(HTTP_STATUS_CODES.CREATED).json({
                message: SUCESS_MESSAGES_PROFISSION.PROFISSION_CREATED,
                profession: result
            });
        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({error:message});
        }
    }
}


export { CreateProfessionController }