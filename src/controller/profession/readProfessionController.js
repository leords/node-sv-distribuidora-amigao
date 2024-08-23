import { ERROR_MESSAGES_PROFISSION, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js";
import { ReadProfessionService } from "../../service/profession/readProfessionService.js"
import { handleErros } from "../../utils/errorHandler.js";


class ReadProfessionController {
    async handle(req, res) {
        try {
            const service = new ReadProfessionService();
            const result = await service.execute();

            if(result.length == 0) {
                throw new Error(ERROR_MESSAGES_PROFISSION.DATABASE_PROFESSION_EMPTY);
            }

            return res.status(HTTP_STATUS_CODES.OK).json({profession: result});

        } catch (error) {
            const {status, message} = handleErros(error);
            return res.status(status).json({message});
            
        }
    }
}

export { ReadProfessionController }