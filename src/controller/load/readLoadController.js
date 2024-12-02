import {
  ERROR_MESSAGES_LOAD,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";
import { ReadLoadService } from "../../service/load/readLoadService.js";
import { handleErros } from "../../utils/errorHandler.js";

class ReadLoadController {
  async handle(req, res) {
    const id = req.query.id ? Number(req.query.id) : undefined;
    const vehiclesId = req.query.vehiclesId
      ? Number(req.query.vehiclesId)
      : undefined;
    const userId = req.query.userId ? Number(req.query.userId) : undefined;
    const status = req.query.status ? req.query.status : undefined;
    const createdFrom = req.query.createdFrom
      ? new Date(req.query.createdFrom)
      : undefined;
    const createdUntil = req.query.createdUntil
      ? new Date(req.query.createdUntil)
      : undefined;

    try {
      if (id && isNaN(id)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }

      if (vehiclesId && isNaN(vehiclesId)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_VEHICLE_ID);
      }

      if (userId && isNaN(userId)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_USER_ID);
      }
      const allowedStatuses = [
        "aberta",
        "fechada",
        "transporte",
        "entregue",
        "retornada",
      ];
      if (
        status &&
        (typeof status !== "string" || !allowedStatuses.includes(status))
      ) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_STATUS);
      }

      if (createdFrom && isNaN(createdFrom.getTime())) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_DATE_FROM);
      }
      if (createdUntil && isNaN(createdUntil.getTime())) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_DATE_UNTIL);
      }
      if (createdUntil && createdFrom && createdUntil < createdFrom) {
        throw new Error(ERROR_MESSAGES_LOAD.DATA_RANGE_ERROR);
      }

      const filters = {
        id: id,
        vehiclesId: vehiclesId,
        userId: userId,
        status: status,
        createdFrom: createdFrom,
        createdUntil: createdUntil,
      };

      const service = new ReadLoadService();
      const result = await service.execute(filters);
      if (!result || result.length === 0) {
        return res
          .status(HTTP_STATUS_CODES.NOT_FOUND)
          .json({ message: "Nenhum resultado encontrado." });
      }

      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { ReadLoadController };
