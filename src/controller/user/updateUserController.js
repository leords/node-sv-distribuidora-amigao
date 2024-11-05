import {
  ERROR_MESSAGES_USER,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_USER,
} from "../../config/httpStatusCodes.js";
import { UpdateUserService } from "../../service/user/updateUserService.js";
import { handleErros } from "../../utils/errorHandler.js";

class UpdateUserController {
  // método para atualizar o status do usuário
  async handleUpdateStatus(req, res) {
    const { id } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY);
      }

      const service = new UpdateUserService();
      const result = await service.executeUpdateStatus(id);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_USER.USER_UPDATED,
        user: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }

  // método para atualizar o nivel de acesso do usuário
  async handleUpdateAcessLevel(req, res) {
    const { id, accessLevel } = req.body;
    try {
      if (!id || accessLevel === undefined) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY);
      }

      if (typeof id !== "number") {
        throw new Error(ERROR_MESSAGES_USER.INVALID_TYPE_ID);
      }

      if (typeof accessLevel !== "string") {
        throw new Error(ERROR_MESSAGES_USER.INVALID_TYPE_ACCESSLEVEL);
      }

      const service = new UpdateUserService();
      const result = await service.executeUpdateAcessLevel(id, accessLevel);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_USER.USER_UPDATED,
        user: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }

  // método para atualizar a profissão relacionada ao usuário
  async handleUpdateProfessionId(req, res) {
    const { id, professionId } = req.body;

    try {
      if (!id || professionId === undefined) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY);
      }

      const service = new UpdateUserService();
      const result = await service.executeUpdateProfessionId(id, professionId);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_USER.USER_UPDATED,
        user: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { UpdateUserController };
