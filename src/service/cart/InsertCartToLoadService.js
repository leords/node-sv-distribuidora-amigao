import {
  ERROR_MESSAGES_CART,
  ERROR_MESSAGES_LOAD,
} from "../../config/httpStatusCodes";
import prismaClient from "../../prisma";

class InsertCartToLoadService {
  async validateLoad(idLoad) {
    const load = await prismaClient.load.findUnique({
      where: {
        id: idLoad,
      },
    });
    //valida a existencia da carga
    if (!load) {
      throw new Error(ERROR_MESSAGES_LOAD.LOAD_NOT_FOUND);
    }
    //valida o status da carga verificando se a mesma está no status correto, ou seja em aberta
    if (searchLoad.status !== "aberta") {
      throw new Error(
        `${ERROR_MESSAGES_LOAD.LOAD_NOT_AVAILABLE} ${searchLoad.status}`
      );
    }
    return searchLoad;
  }

  async validateCart(idCart) {
    //busca o carrinho com idCart passado
    const cart = await prismaClient.cart.findUnique({
      where: {
        id: idCart,
      },
    });
    //valida a existencia do carrinho
    if (!cart) {
      throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
    }
    //valida se o statusDelivery do carrinho não é PENDENTE.
    if (cart.statusDelivery !== "pendente") {
      throw new Error(
        `${ERROR_MESSAGES_CART.CART_NOT_AVAILABLE} ${cart.statusDelivery}`
      );
    }
    //valida se o statusDelivery nao é fechada
    if (cart.statusDelivery === "fechada") {
      throw new Error(
        `${ERROR_MESSAGES_CART.CART_NOT_AVAILABLE} ${cart.statusDelivery}`
      );
    }
  }

  async addValueAndWeight(idLoad) {
    //faz a soma de total e qiantity em todos os carrinhos que estão alocados na carga do idLoad passado
    const addValues = await prismaClient.cart.aggregate({
      _sum: {
        total: true,
        quantity: true,
      },
      where: {
        loadId: idLoad,
      },
    });

    //busca e atualiza quantity e weight da carga pelo idLoad
    await prismaClient.load.update({
      where: {
        id: idLoad,
      },
      data: {
        quantity: addValues._sum.quantity,
        weight: addValues._sum.total,
      },
    });
  }

  async execute(idLoad, idCart) {
    try {
      const result = await prismaClient.$transaction(async (tx) => {
        await this.validateLoad(idLoad);
        await this.validateCart(idCart);

        // faz a inserção do carrinho(idCart) em determinada carga passada pelo idLoad e altera o status delivery do carrinho para carregado!
        return await tx.cart.update({
          where: {
            id: idCart,
          },
          data: {
            loadId: idLoad,
            statusDelivery: "carregado",
          },
        });
      });

      await this.addValueAndWeight(idLoad);

      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { InsertCartToLoadService };
