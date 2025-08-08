import {
  ERROR_MESSAGES_TRANSACTION,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGE_TRANSACTION,
} from "../../config/httpStatusCodes.js";
import { UpdateTransactionService } from "../../service/transaction/updateTransactionService.js";
import { handleErros } from "../../utils/errorHandler.js";

class UpdateTransactionController {
  async handle(req, res) {
    const { id, status } = req.body;

    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_ID);
      }
      if (!status) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_STATUS);
      }
      const allowedStatus = ["ativa", "cancelada"];
      if (!allowedStatus.includes(status)) {
        throw new Error(
          ERROR_MESSAGES_TRANSACTION.INVALID_OPTION_STATUS_TRANSACTION
        );
      }

      const service = new UpdateTransactionService();
      const result = await service.execute(id, status);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGE_TRANSACTION.TRANSACTION_UPDATED_SUCCESSFULLY,
        transaction: result,
      });
    } catch (error) {
      console.error(error);
      const { status, message } = handleErros(error);
      return res.status(status).json({ message });
    }
  }
}

export { UpdateTransactionController };
