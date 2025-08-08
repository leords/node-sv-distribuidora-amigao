import {
  ERROR_MESSAGES_CART,
  ERROR_MESSAGES_PAYMENT_METHOD,
} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class UpdatePaymentCartService {
  async execute(id, paymentId) {
    try {
      const cart = await prismaClient.cart.findUnique({
        where: {
          id: id,
        },
      });
      if (!cart) {
        throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
      }

      const payment = await prismaClient.paymentMethod.findUnique({
        where: { id: paymentId },
      });
      if (!payment) {
        throw new Error(ERROR_MESSAGES_PAYMENT_METHOD.PAYMENT_NOT_FOUND);
      }
      const updateCart = await prismaClient.cart.update({
        where: {
          id: id,
        },
        data: {
          paymentId: paymentId,
        },
      });
      return updateCart;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { UpdatePaymentCartService };
