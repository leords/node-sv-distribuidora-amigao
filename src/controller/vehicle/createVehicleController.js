import {
  ERROR_MESSAGES_VEHICLE,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_VEHICLE,
} from "../../config/httpStatusCodes.js";
import { CreateVehicleService } from "../../service/vehicle/createVehicleService.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateVehicleController {
  
  async handle(req, res) {
    const { model, licensePlate, brand, weight } = req.body;

    try {
      if (!model) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_MODEL);
      }
      if (typeof model !== "string") {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_MODEL_TYPE);
      }
      if (model.length > 50) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_MODEL_LENGTH);
      }
      if (!licensePlate) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_LICENSE_PLATE);
      }
      if (typeof licensePlate !== "string") {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_LICENSE_PLATE_TYPE);
      }
      if (licensePlate.includes("-")) {
        throw new Error(ERROR_MESSAGES_VEHICLE.NOT_ALLOWED_CHARACTER);
      }
      if (!brand) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_BRAND);
      }
      if (typeof brand !== "string") {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_BRAND_TYPE);
      }
      if (!weight) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_WEIGHT);
      }
      if (isNaN(weight)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_WEIGHT_TYPE);
      }

      const service = new CreateVehicleService();
      const result = await service.execute(model, licensePlate, brand, weight);

      return res.status(HTTP_STATUS_CODES.CREATED).json({
        message: SUCESS_MESSAGES_VEHICLE.VEHICLE_CREATED_SUCCESSFULLY,
        vehicle: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { CreateVehicleController };
