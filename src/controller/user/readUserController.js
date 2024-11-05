import {
  ERROR_MESSAGES_USER,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";
import { ReadUserService } from "../../service/user/readUserService.js";
import { handleErros } from "../../utils/errorHandler.js";

class ReadUserController {
  async handleReadAnyUsers(req, res) {
    const { status, profession, accessLevel } = req.query;
    try {
      if (status && !["true", "false"].includes(status)) {
        throw new Error(
          `Status não pode ser nulo e '${ERROR_MESSAGES_USER.INVALID_TYPE_STATUS}'`
        );
      }
      if (profession && typeof profession !== "string") {
        throw new Error(
          `Profession não pode ser nulo e '${ERROR_MESSAGES_USER.INVALID_TYPE_PROFESSION}'`
        );
      }
      if (accessLevel && typeof accessLevel !== "string") {
        throw new Error(
          `Nivel de acesso não pode ser nulo e '${ERROR_MESSAGES_USER.INVALID_TYPE_ACCESSLEVEL}'`
        );
      }

      //preparando os filtros
      const filters = {
        status:
          status === "true" ? true : status === "false" ? false : undefined,
        profession: profession || undefined,
        accessLevel: accessLevel,
      };

      const service = new ReadUserService();
      const result = await service.executeAnyUsers(filters);

      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }

  async handleReadUniqueUser(req, res) {
    const { id } = req.params;
    try {
      // convertendo ID em número
      const parsedID = Number(id);

      // isNaN verifica se o ID é valor válido!
      if (isNaN(parsedID)) {
        throw new Error(
          `ID não pode ser nulo e '${ERROR_MESSAGES_USER.INVALID_TYPE_ID}'`
        );
      }

      const service = new ReadUserService();
      const result = await service.executeUniqueUser(parsedID);

      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { ReadUserController };
