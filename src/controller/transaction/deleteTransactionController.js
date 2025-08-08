import {
  ERROR_MESSAGES_TRANSACTION,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGE_TRANSACTION,
} from "../../config/httpStatusCodes.js";
import { DeleteTransactionService } from "../../service/transaction/deleteTransactionService.js";
import { handleErros } from "../../utils/errorHandler.js";

class DeleteTransactionController {
  async handle(req, res) {
    const { id } = req.body;
    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_ID);
      }
      if (isNaN(id)) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_ID_TYPE);
      }

      const service = new DeleteTransactionService();
      const result = await service.execute(id);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGE_TRANSACTION.TRANSACTION_DELETED_SUCCESSFULLY,
        transaction: result,
      });
    } catch (error) {
      console.error(error);
      const { status, message } = handleErros(error);
      return res.status(status).json({ message });
    }
  }
}

export { DeleteTransactionController };
