import {
  ERROR_MESSAGES_LOAD,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";
import { UpdateLoadService } from "../../service/load/updateLoadService.js";
import { handleErros } from "../../utils/errorHandler.js";

class UpdateLoadController {
  async handleUpdateName(req, res) {
    const { id, name } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }
      if (!name) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_NAME);
      }
      if (typeof name !== "string") {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }

      const service = new UpdateLoadService();
      const result = await service.execute(id, name);

      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }

  async handleUpdateVehicle(req, res) {
    const { id, vehicleId } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }
      if (!vehicleId) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_VEHICLE_ID);
      }
      if (isNaN(vehicleId)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }

  async handleUpdateUser(req, res) {
    const { id, userId } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }
      if (!userId) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }
      if (isNaN(userId)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }

  async handleUpdateStatus(req, res) {
    const { id, status } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }
      if (!status) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_STATUS);
      }
      if (typeof status !== "string") {
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
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { UpdateLoadController };
