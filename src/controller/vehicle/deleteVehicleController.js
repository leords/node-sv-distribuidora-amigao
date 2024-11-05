import { HTTP_STATUS_CODES } from "../../config/httpStatusCodes";
import { DeleteVehicleService } from "../../service/vehicle/deleteVehicleService";
import { handleErros } from "../../utils/errorHandler";

class DeleteVehicleController {
  async handle(req, res) {
    const { id } = req.body;
    try {
      if (!id) {
        throw new Error();
      }
      if (isNaN(id)) {
        throw new Error();
      }
      const service = new DeleteVehicleService();
      const result = await service.execute(id);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: "",
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
