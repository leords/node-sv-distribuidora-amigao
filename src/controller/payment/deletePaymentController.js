import {
  ERROR_MESSAGES_PAYMENT,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_PAYMENT,
} from "../../config/httpStatusCodes.js";
import { DeletePaymentService } from "../../service/payment/deletePaymentService.js";
import { handleErros } from "../../utils/errorHandler.js";

class DeletePaymentController {
  async handle(req, res) {
    const { id } = req.body;

    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_ID_TYPE);
      }

      const service = new DeletePaymentService();
      const result = await service.execute(id);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_PAYMENT.PAYMENT_DELETED_SUCCESSFULLY,
        payment: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { DeletePaymentController };
