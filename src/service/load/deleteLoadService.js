import { ERROR_MESSAGES_LOAD } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class DeleteLoadService {
  async execute(id) {
    try {
      //buscando load por id
      const validatingLoad = await prismaClient.load.findUnique({
        where: {
          id: id,
        },
      });
      //validando a busca do load
      if (!validatingLoad) {
        throw new Error(ERROR_MESSAGES_LOAD.LOAD_NOT_FOUND);
      }
      //1. Verificar se este carrinho está com o status diferente de aberta ou fechada
      if (!["aberta", "fechada"].includes(validatingLoad.status)) {
        throw new Error(`${ERROR_MESSAGES_LOAD.LOAD_DELETE_RESTRICTED}`);
      }
      //2. Buscar todos os cart que estão associados à esta carga e altera-los para null(sem carga).
      await prismaClient.cart.updateMany({
        where: {
          loadId: id,
        },
        data: {
          loadId: null,
          statusDelivery: "pendente",
        },
      });
      //3. Deletar a carga
      await prismaClient.load.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { DeleteLoadService };
