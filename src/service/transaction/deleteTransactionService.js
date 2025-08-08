import { ERROR_MESSAGES_TRANSACTION } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class DeleteTransactionService {
  async execute(id) {
    try {
      const transaction = await prismaClient.transaction.findUnique({
        where: {
          id: id,
        },
      });

      if (!transaction) {
        throw new Error(ERROR_MESSAGES_TRANSACTION.TRANSACTION_NOT_FOUND);
      }

      const deleteTransaction = await prismaClient.transaction.delete({
        where: {
          id: id,
        },
      });

      return deleteTransaction;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export { DeleteTransactionService };
