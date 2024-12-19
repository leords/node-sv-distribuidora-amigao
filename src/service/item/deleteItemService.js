import { Decimal } from "@prisma/client/runtime/index.js";
import {
  ERROR_MESSAGES_CART,
  ERROR_MESSAGES_CART_ITEM,
} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class DeleteItemService {
  //1. Apagar um item do carrinho
  async executeDeleteUnique(id, cartId) {
    try {
      const result = await prismaClient.$transaction(async (tx) => {
        const cartItem = await tx.cartItem.findUnique({
          where: {
            id: id,
          },
        });

        if (!cartItem) {
          throw new Error(ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND);
        }

        // excluindo o item do carrinho
        const deleteCartItem = await tx.cartItem.delete({
          where: {
            id: id,
          },
        });

        // calculando novamente o total de todos os cartItem(item) que estão relacionados ao cartID(carrinho) passado após a exclusão do item
        const sumCartItem = await tx.cartItem.aggregate({
          _sum: {
            total: true,
          },
          where: {
            cartId: cartId,
          },
        });
        // calculando novamente a quantidade dos cartItem(item) que estão relacionados ao cartID(carrinho) após a exclusão do item
        const sumQuantityCartItem = await tx.cartItem.aggregate({
          _sum: {
            quantity: true,
          },
          where: {
            cartId: cartId,
          },
        });
        // atualizando o carrinho com o novo total e a nova quantidade coletados acima, após a exclusão do item
        await tx.cart.update({
          where: {
            id: cartId,
          },
          data: {
            total: Decimal(sumCartItem._sum.total),
            quantity: sumQuantityCartItem._sum.quantity,
          },
        });

        return deleteCartItem;
      });

      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  //2. Apagar todos os itens do carrinho
  async executeDeleteMany(cartId) {
    try {
      const result = await prismaClient.$transaction(async (tx) => {
        //buscando o carrinho pelo ID
        const cart = await tx.cart.findUnique({
          where: {
            id: cartId,
          },
        });
        //validando a existencia do carrinho
        if (!cart) {
          throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
        }

        //excluindo todos os itens do carrinho
        const deleteCartItem = await tx.cartItem.deleteMany({
          where: {
            cartId: cartId,
          },
        });

        // calculando novamente o total de todos os cartItem(item) que estão relacionados ao cartID(carrinho) passado após a exclusão do item
        const sumCartItem = await tx.cartItem.aggregate({
          _sum: {
            total: true,
          },
          where: {
            cartId: cartId,
          },
        });
        // calculando novamente a quantidade dos cartItem(item) que estão relacionados ao cartID(carrinho) após a exclusão do item
        const sumQuantityCartItem = await tx.cartItem.aggregate({
          _sum: {
            quantity: true,
          },
          where: {
            cartId: cartId,
          },
        });
        // atualizando o carrinho com o novo total e a nova quantidade coletados acima, após a exclusão do item
        await tx.cart.update({
          where: {
            id: cartId,
          },
          data: {
            total: Decimal(sumCartItem._sum.total),
            quantity: sumQuantityCartItem._sum.quantity,
          },
        });

        return deleteCartItem;
      });

      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { DeleteItemService };
