import { ERROR_MESSAGES_TRANSACTION } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class UpdateTransactionService {
  async execute(id, status) {
    try {
      const transaction = await prismaClient.transaction.findUnique({
        where: {
          id: id,
        },
      });
      if (!transaction) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.TRANSACTION_NOT_FOUND);
      }
      if (transaction.status === status) {
        throw new Error(`Status atual da transação já é ${status}`);
      }

      const updateTransaction = await prismaClient.transaction.update({
        where: {
          id: id,
        },
        data: {
          status: status,
          canceledAt: new Date(),
        },
      });

      return updateTransaction;
    } catch (error) {
      throw error;
    }
  }
}

export { UpdateTransactionService };
