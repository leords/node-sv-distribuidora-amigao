import { ERROR_MESSAGES_CLIENT } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class CreateTransactionService {
  async addDebit(method, price, clientId, description, userId) {
    try {
      const client = await prismaClient.client.findUnique({
        where: {
          id: clientId,
        },
      });

      if (!client) {
        throw new Error(ERROR_MESSAGES_CLIENT.CLIENT_NOT_FOUND);
      }

      const transaction = await prismaClient.transaction.create({
        data: {
          method: method,
          price: -Math.abs(price),
          clientId: clientId,
          description: description,
          type: "debit",
          userId,
        },
      });

      return transaction;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async addCredit(method, price, clientId, description, userId) {
    try {
      const client = await prismaClient.client.findUnique({
        where: {
          id: clientId,
        },
      });

      if (!client) {
        throw new Error(ERROR_MESSAGES_CLIENT.CLIENT_NOT_FOUND);
      }

      const credit = await prismaClient.transaction.create({
        data: {
          method: method,
          price: Math.abs(price),
          clientId: clientId,
          description: description,
          type: "credit",
          userId,
        },
      });

      return credit;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export { CreateTransactionService };
