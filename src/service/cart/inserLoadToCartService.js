import {
  ERROR_MESSAGES_CART,
  ERROR_MESSAGES_LOAD,
} from "../../config/httpStatusCodes";
import prismaClient from "../../prisma";

class InsertLoadToCartService {
  async validateLoad(idLoad) {
    const load = await prismaClient.load.findUnique({
      where: {
        id: idLoad,
      },
    });
    if (!load) {
      throw new Error(ERROR_MESSAGES_LOAD.LOAD_NOT_FOUND);
    }
    //valida o status da carga verificando se a mesma está no status correto.
    if (searchLoad.status !== "aberta") {
      throw new Error(
        `Está carga não está disponivel para alocar mais pedidos, ela está como: ${searchLoad.status}`
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
    if (!cart) {
      throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
    }
    //valida se o statusDelivery não é PENDENTE.
    if (cart.statusDelivery !== "pendente") {
      throw new Error(
        `Este pedido não está disponivel para alocar em cargas, ele se encontra como: ${searchCart.statusDelivery}`
      );
    }
  }

  async execute(idLoad, idCart) {
    try {
      const result = await prismaClient.$transaction(async (tx) => {
        await this.validateLoad(idLoad);
        await this.validateCart(idCart);

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

      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { InsertLoadToCartService };
