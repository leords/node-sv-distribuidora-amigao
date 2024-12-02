import {
  ERROR_MESSAGES_LOAD,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGE_LOAD,
} from "../../config/httpStatusCodes.js";
import { DeleteLoadService } from "../../service/load/deleteLoadService.js";
import { handleErros } from "../../utils/errorHandler.js";

class DeleteLoadController {
  async handle(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }

      const service = new DeleteLoadService();
      const result = await service.execute(id);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGE_LOAD.LOAD_DELETED_SUCCESSFULLY,
        load: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { DeleteLoadController };
