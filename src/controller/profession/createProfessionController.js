import {
  ERROR_MESSAGES_PROFISSION,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_PROFISSION,
} from "../../config/httpStatusCodes.js";
import { CreateProfessionService } from "../../service/profession/createProfessionService.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateProfessionController {
  async handle(req, res) {
    const { description } = req.body;
    try {
      if (!description) {
        throw new Error(ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_EMPTY);
      }
      if (typeof description !== "string") {
        throw new Error(ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID);
      }
      const regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(description)) {
        throw new Error(ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_ISNUMBER);
      }
      if (description.length > 50) {
        throw new Error(
          ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_CHARACTER
        );
      }

      const service = new CreateProfessionService();
      const result = await service.execute(description);

      return res.status(HTTP_STATUS_CODES.CREATED).json({
        message: SUCESS_MESSAGES_PROFISSION.PROFISSION_CREATED,
        profession: result,
      });
    } catch (error) {
      console.log(error);
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { CreateProfessionController };
