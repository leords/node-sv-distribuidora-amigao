import {
  ERROR_MESSAGES_PROFISSION,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_PROFISSION,
} from "../../config/httpStatusCodes.js";
import { DeleteProfessionService } from "../../service/profession/deleteProfessionService.js";
import { handleErros } from "../../utils/errorHandler.js";

class DeleteProfessionController {
  async handle(req, res) {
    const { id } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_PROFISSION.INVALID_ID_EMPTY);
      }
      if (typeof id !== "number") {
        throw new Error(ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID);
      }

      const service = new DeleteProfessionService();
      const result = await service.execute(id);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_PROFISSION.PROFISSION_DELETED,
        profession: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { DeleteProfessionController };
