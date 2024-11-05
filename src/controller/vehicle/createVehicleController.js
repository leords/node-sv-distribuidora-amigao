import { HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js";
import { CreateVehicleService } from "../../service/vehicle/createVehicleService.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateVehicleController {
  async handle(req, res) {
    const { model, licensePlate, brand, weight } = req.body;

    try {
      if (!model) {
        throw new Error("");
      }
      if (typeof model !== "string") {
        throw new Error();
      }
      if (model.length > 50) {
        throw new Error();
      }
      if (!licensePlate) {
        throw new Error();
      }
      if (typeof licensePlate !== "string") {
        throw new Error();
      }
      if (licensePlate.includes("-")) {
        throw new Error("");
      }
      if (!brand) {
        throw new Error();
      }
      if (typeof brand !== "string") {
        throw new Error();
      }
      if (!weight) {
        throw new Error();
      }
      if (NaN(weight)) {
        throw new Error();
      }

      const service = new CreateVehicleService();
      const result = await service.execute(model, licensePlate, brand, weight);

      return res.status(HTTP_STATUS_CODES.CREATED).json({
        message: "",
        vehicle: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { CreateVehicleController };
