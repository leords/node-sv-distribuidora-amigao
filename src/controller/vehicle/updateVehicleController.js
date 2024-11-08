import {
  ERROR_MESSAGES_VEHICLE,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";
import { UpdateVehicleService } from "../../service/vehicle/updateVehicleService.js";
import { handleErros } from "../../utils/errorHandler.js";

class UpdateVehicleController {
  async HandleEditStatusVehicle(req, res) {
    const { id, status } = req.body;

    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID_TYPE);
      }
      if (!status) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_STATUS);
      }
      const allowedStatuses = ["true", "false"];
      if (status && !allowedStatuses.includes(status)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_OPTION);
      }

      const statusVerify =
        status === "true" ? true : status === "false" ? false : undefined;

      const service = new UpdateVehicleService();
      const result = await service.executeUpdateVehicleStatus(id, statusVerify);

      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }

  async HandleEditLicensePlateVehicle(req, res) {
    const { id, licensePlate } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID_TYPE);
      }
      if (!licensePlate) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_LICENSE_PLATE);
      }
      if (typeof licensePlate !== "string") {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_LICENSE_PLATE_TYPE);
      }
      const allowedCaracter = "-";
      if (allowedCaracter.includes(licensePlate)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.NOT_ALLOWED_CHARACTER);
      }

      const service = new UpdateVehicleService();
      const result = await service.executeUpdateVehicleLicensePlate(
        id,
        licensePlate
      );

      return res.status(HTTP_STATUS_CODES.OK).json({ result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { UpdateVehicleController };
