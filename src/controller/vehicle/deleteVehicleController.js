import {
  ERROR_MESSAGES_VEHICLE,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_VEHICLE,
} from "../../config/httpStatusCodes.js";
import { DeleteVehicleService } from "../../service/vehicle/deleteVehicleService.js";
import { handleErros } from "../../utils/errorHandler.js";

class DeleteVehicleController {
  async handle(req, res) {
    const { id } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID_TYPE);
      }
      const service = new DeleteVehicleService();
      const result = await service.execute(id);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_VEHICLE.VEHICLE_DELETED_SUCCESSFULLY,
        vehicle: result,
      });
    } catch (error) {
      console.log(error);
      const { message, status } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}
export { DeleteVehicleController };
