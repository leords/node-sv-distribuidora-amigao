import {
  ERROR_MESSAGES_VEHICLE,
  ERROR_MESSAGES_LOAD,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";
import { ReadVehicleService } from "../../service/vehicle/readVehicleService.js";
import { handleErros } from "../../utils/errorHandler.js";

class ReadVehicleController {
  //Buscar veículos sem parametro, buscar por ID e buscar por status.
  async handle(req, res) {
    const id = req.query.id ? Number(req.query.id) : undefined;
    const statusString = req.query.status ? req.query.status : undefined;
    const licensePlate = req.query.licensePlate
      ? req.query.licensePlate.toUpperCase()
      : undefined;

    try {
      const allowedStatuses = ["true", "false"];
      if (statusString && !allowedStatuses.includes(statusString)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_OPTION);
      }
      const status =
        statusString === "true"
          ? true
          : statusString === "false"
          ? false
          : undefined;

      if (id && isNaN(id)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID_TYPE);
      }

      if (
        typeof licensePlate !== "string" &&
        licensePlate &&
        licensePlate.length !== 7
      ) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_LICENSE_PLATE);
      }

      // criando um objeto com os dados da requisição.
      const filters = {
        id: id,
        status: status,
        licensePlate: licensePlate,
      };

      const service = new ReadVehicleService();
      const result = await service.execute(filters);
      if (!result || result.length === 0) {
        return res
          .status(HTTP_STATUS_CODES.NOT_FOUND)
          .json({ message: "Nenhum resultado encontrado." });
      }
      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      console.log(error);
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { ReadVehicleController };
