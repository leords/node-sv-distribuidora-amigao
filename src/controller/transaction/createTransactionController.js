import {
  ERROR_MESSAGES_TRANSACTION,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGE_TRANSACTION,
} from "../../config/httpStatusCodes.js";
import { CreateTransactionService } from "../../service/transaction/createTransactionService.js";

import { handleErros } from "../../utils/errorHandler.js";

class CreateTransactionController {
  async handle(req, res) {
    const { method, price, clientId, description, type, userId } = req.body;

    try {
      if (!typeof type === "string") {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_TRANSACTION);
      }
      const allowedTypes = ["credit", "debit"];
      if (!allowedTypes.includes(type)) {
        throw new Error(
          ERROR_MESSAGES_TRANSACTION.INVALID_OPTION_TYPES_TRANSACTION
        );
      }
      if (!method) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_NAME);
      }
      if (!typeof method === "string") {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_NAME_TYPE);
      }
      if (!price) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_PRICE);
      }
      if (isNaN(price)) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_PRICE);
      }
      if (!clientId) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_CLIENT_ID);
      }
      if (!typeof clientId === "string") {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_CLIENT_ID);
      }
      if (!description) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_DESCRIPTION);
      }
      if (!typeof description === "string") {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_DESCRIPTION_TYPE);
      }
      if (!userId) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_ID);
      }
      if (isNaN(userId)) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.INVALID_ID_TYPE);
      }

      const service = new CreateTransactionService();

      if (type == "debit") {
        const result = await service.addDebit(
          method,
          price,
          clientId,
          description,
          userId
        );
        return res.status(HTTP_STATUS_CODES.OK).json({
          message: `${SUCESS_MESSAGE_TRANSACTION.TRANSACTION_CREATED_SUCCESSFULLY} débito!`,
          transaction: result,
        });
      } else if (type == "credit") {
        const result = await service.addCredit(
          method,
          price,
          clientId,
          description,
          userId
        );
        return res.status(HTTP_STATUS_CODES.OK).json({
          message: `${SUCESS_MESSAGE_TRANSACTION.TRANSACTION_CREATED_SUCCESSFULLY} crédito!`,
          transaction: result,
        });
      }
    } catch (error) {
      console.error(error);
      const { status, message } = handleErros(error);
      return res.status(status).json({ message });
    }
  }
}

export { CreateTransactionController };
