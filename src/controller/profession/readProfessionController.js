import {
  ERROR_MESSAGES_PROFISSION,
  ERROR_MESSAGES_USER,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";
import { ReadProfessionService } from "../../service/profession/readProfessionService.js";
import { handleErros } from "../../utils/errorHandler.js";

class ReadProfessionController {
  async handleReadAllProfession(req, res) {
    try {
      const service = new ReadProfessionService();
      const result = await service.executeReadAllProfession();

      if (result.length == 0) {
        throw new Error(ERROR_MESSAGES_PROFISSION.DATABASE_PROFESSION_EMPTY);
      }

      return res.status(HTTP_STATUS_CODES.OK).json({ profession: result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ message });
    }
  }

  async handleRealUniqueProfession(req, res) {
    const { id } = req.params;
    try {
      const parsedID = Number(id);

      if (isNaN(parsedID)) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_TYPE_ID);
      }

      const service = new ReadProfessionService();
      const result = await service.executeReadUniqueProfession(parsedID);

      return res.status(HTTP_STATUS_CODES.OK).json({ profession: result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { ReadProfessionController };
