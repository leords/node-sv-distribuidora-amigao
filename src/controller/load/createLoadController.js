import {
  ERROR_MESSAGES_LOAD,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGE_LOAD,
} from "../../config/httpStatusCodes.js";
import { CreateLoadService } from "../../service/load/createLoadService.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateLoadController {
  async handle(req, res) {
    const { name, vehiclesId, userId, status } = req.body;
    try {
      if (!name) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_NAME);
      }
      if (typeof name === "string") {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_NAME_TYPE);
      }
      if (!vehiclesId) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_VEHICLE_ID);
      }
      if (isNaN(vehiclesId)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_VEHICLE_ID_TYPE);
      }
      if (!userId) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_USER_ID);
      }
      if (isNaN(userId)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_USER_ID_TYPE);
      }
      if (!status) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_STATUS);
      }
      if (typeof status === "string") {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_STATUS_TYPE);
      }
      const allowedStatuses = [
        "aberta",
        "fechada",
        "transporte",
        "entregue",
        "retornada",
      ];
      if (allowedStatuses.includes(status)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_STATUS_METHOD);
      }

      const service = new CreateLoadService();
      const result = await service.execute(name, vehiclesId, userId, status);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGE_LOAD.LOAD_CREATED_SUCCESSFULLY,
        load: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { CreateLoadController };
