import { Decimal } from "@prisma/client/runtime/index.js";
import {
  ERROR_MESSAGES_CART,
  ERROR_MESSAGES_CART_ITEM,
} from "../../config/httpStatusCodes.js";
import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma/index.js";

class CreateItemService {
  async execute(cartId, productId, quantity) {
    const prisma = new PrismaClient();

    try {
      //para executar múltiplas operações de leitura e escrita de forma atômica.
      const result = await prisma.$transaction(async (tx) => {
        // Busca no banco o carrinho(cart) referente ao ID
        const cart = await tx.cart.findUnique({
          where: {
            id: cartId,
          },
        });
        // confere a existencia do carrinho(cart) e trata com erro
        if (!cart) {
          throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
        }

        // Busca no banco o produto referente ao ID passado
        const product = await tx.product.findUnique({
          where: {
            id: productId,
          },
        });
        // confere a existencia do produto e trata com erro
        if (!product) {
          throw new Error(ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND);
        }

        // variável weight recebendo o valor da quantidade passada, multiplicado pelo peso do produto
        const productweight = product.weight * quantity;
        // função que busca o valor total de weight e o atualiza com a nova inserção de item
        const currentWeight = cart.weight + productweight;

        // criando um novo CartItem
        const newItemToCard = await tx.cartItem.create({
          data: {
            cartId,
            productId,
            productName: product.name,
            price: product.price,
            quantity,
            total: product.price * quantity,
          },
        });
        // agregando o valor total de todos os CartItem relacionados a este CartId.
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
        // atualizando o total do carrinho com o retorno de TOTAL | QUANTIDADE | PESO referente aos produtos(CartItem) relacionados a este carrinho
        await tx.cart.update({
          where: {
            id: cartId,
          },
          data: {
            total: Decimal(sumCartItem._sum.total) || 0,
            quantity: sumQuantityCartItem._sum.quantity || 0,
            weight: currentWeight || 0,
          },
        });

        return newItemToCard;
      });

      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { CreateItemService };
