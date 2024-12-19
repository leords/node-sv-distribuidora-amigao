import {
  ERROR_MESSAGES_CART,
  ERROR_MESSAGES_LOAD,
} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

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
    if (load.status !== "aberta") {
      throw new Error(
        `${ERROR_MESSAGES_LOAD.LOAD_NOT_AVAILABLE} ${searchLoad.status}`
      );
    }
    return load;
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

  // fazer a contabilidade do peso dos produtos pata totalizar na carga
  // tem que somar todos os carrinhos que tem o numero da carga!!!!
  async returnWeightForCart(idLoad) {
    const weightCart = await prismaClient.cart.aggregate({
      _sum: {
        weight: true,
      },
      where: {
        loadId: idLoad,
      },
    });

    return weightCart._sum.weight;
  }

  async addValueAndWeight(idLoad, idCart) {
    //faz a soma de total e quantity em todos os carrinhos que estão alocados na carga do idLoad passado
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
        total: addValues._sum.total,
        weight: await this.returnWeightForCart(idLoad),
      },
    });
    console.log(await this.returnWeightForCart(idLoad));
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

      await this.addValueAndWeight(idLoad, idCart);

      return result;
    } catch (error) {
      console.log("aqui", error);
      throw error;
    }
  }
}

export { InsertCartToLoadService };
