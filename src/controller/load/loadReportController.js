import { LoadReportService } from "../../service/load/loadReportService.js";
import { handleErros } from "../../utils/errorHandler.js";
import {
  ERROR_MESSAGES_LOAD,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";

class LoadReportController {
  async handle(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }

      const service = new LoadReportService();
      const result = await service.execute(id);

      if (!result || result.length === 0) {
        return res
          .status(HTTP_STATUS_CODES.NOT_FOUND)
          .json({ message: "Nenhum resultado encontrado!" });
      }

      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { LoadReportController };
