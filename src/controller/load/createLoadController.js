import {
  ERROR_MESSAGES_LOAD,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGE_LOAD,
} from "../../config/httpStatusCodes.js";
import { CreateLoadService } from "../../service/load/CreateLoadService.js";

import { handleErros } from "../../utils/errorHandler.js";

class CreateLoadController {
  async handle(req, res) {
    const { name, vehiclesId, userId } = req.body;
    try {
      if (!name) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_NAME);
      }
      if (typeof name !== "string") {
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

      const service = new CreateLoadService();
      const result = await service.execute(name, vehiclesId, userId);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGE_LOAD.LOAD_CREATED_SUCCESSFULLY,
        load: result,
      });
    } catch (error) {
      console.log(error);
      const { status, message } = handleErros(error);
      return res.status(status).json({ message });
    }
  }
}

export { CreateLoadController };
