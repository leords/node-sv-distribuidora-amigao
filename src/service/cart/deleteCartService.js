import { ERROR_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class DeleteCartService {
  //1. Apagar o carrinho
  //2. Limpar os itens do carrinho
  async execute(id) {
    try {
      // Faz a busca do carrinho por ID
      const cartExisting = await prismaClient.cart.findUnique({
        where: {
          id: id,
        },
      });
      // valida a existencia do carrinho
      if (!cartExisting) {
        throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
      }

      // Desassocia todos os itens do carrinho
      await prismaClient.cartItem.updateMany({
        where: {
          cartId: id,
        },
        data: {
          cartId: null,
        },
      });

      // exclui o carrinho.
      const deleteCart = await prismaClient.cart.delete({
        where: {
          id: id,
        },
      });

      return deleteCart;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { DeleteCartService };
