import { ERROR_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class UpdateCartService {
  async execute(id, statusDelivery) {
    try {
      const cart = await prismaClient.cart.findUnique({
        where: {
          id: id,
        },
      });

      if (!cart) {
        throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
      }

      const updateCart = await prismaClient.cart.update({
        where: {
          id: cart.id,
        },
        data: {
          statusDelivery: statusDelivery,
        },
      });

      return updateCart;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { UpdateCartService };
