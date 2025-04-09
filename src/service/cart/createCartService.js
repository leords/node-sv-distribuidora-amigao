import { ERROR_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class CreateCartService {
  async execute(clientId, userId, paymentId) {
    try {
      const validateUser = await prismaClient.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!validateUser) {
        throw new Error(ERROR_MESSAGES_CART.USER_NOT_FOUND);
      }
      const validateClient = await prismaClient.client.findUnique({
        where: {
          id: clientId,
        },
      });
      if (!validateClient) {
        throw new Error(ERROR_MESSAGES_CART.CLIENT_NOT_FOUND);
      }
      const validatePayment = await prismaClient.paymentMethod.findUnique({
        where: {
          id: paymentId,
        },
      });
      if (!validatePayment) {
        throw new Error(ERROR_MESSAGES_CART.PAYMENT_NOT_FOUND);
      }

      const newCart = await prismaClient.cart.create({
        data: {
          clientId: clientId,
          userId: userId,
          paymentId: paymentId,
        },
      });

      return newCart;
    } catch (error) {
      throw error;
    }
  }
}

export { CreateCartService };
