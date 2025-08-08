import {
  ERROR_MESSAGES_PAYMENT_METHOD,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_CART,
} from "../../config/httpStatusCodes.js";
import { UpdatePaymentCartService } from "../../service/cart/updatePaymentCartService.js";
import { handleErros } from "../../utils/errorHandler.js";

class UpdatePaymentCartController {
  async handle(req, res) {
    const { id, paymentId } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_VEHICLE.INVALID_ID_TYPE);
      }
      if (!paymentId) {
        throw new Error(ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID_EMPTY);
      }
      if (isNaN(paymentId)) {
        throw new Error(ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID);
      }

      const service = new UpdatePaymentCartService();
      const result = await service.execute(id, paymentId);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_CART.CART_UPDATED_SUCCESSFULLY,
        cart: result,
      });
    } catch (error) {
      console.error(error);
      const { status, message } = handleErros(error);
      res.status(status).json({ error: message });
    }
  }
}

export { UpdatePaymentCartController };
