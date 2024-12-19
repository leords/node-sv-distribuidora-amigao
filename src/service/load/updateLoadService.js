import {
  ERROR_MESSAGES_LOAD,
  ERROR_MESSAGES_USER,
  SUCESS_MESSAGE_LOAD,
} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class UpdateLoadService {
  // função que tem objetivo de validar a existencia de uma CARGA com o ID passado!
  async validatingLoadForId(id) {
    const existingLoad = await prismaClient.load.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingLoad) {
      throw new Error(ERROR_MESSAGES_LOAD.LOAD_NOT_FOUND);
    }
    return existingLoad;
  }
  // função que tem objetivo de atualizar o nome
  async executeUpdateName(id, name) {
    try {
      //valida existencia da carga pelo id
      await this.validatingLoadForId(id);

      //busca uma carga com o nome passado
      const nameAlreadyExists = await prismaClient.load.findFirst({
        where: {
          name: name,
        },
      });
      console.log(nameAlreadyExists);
      // verifica se nameAlreadyExists.status existe e está como entregue ou retornada para empedir a atualização
      // não permite que uma carga utilize o mesmo nome que uma carga que não esteja como entregue ou retornada
      if (
        nameAlreadyExists &&
        ["entregue", "retornada"].includes(nameAlreadyExists.status)
      ) {
        throw new Error(ERROR_MESSAGES_LOAD.LOAD_NAME_PENDING);
      }
      // atualiza o nome da carga
      await prismaClient.load.update({
        where: {
          id: id,
        },
        data: {
          name: name,
        },
      });

      return `Nome da ${SUCESS_MESSAGE_LOAD.LOAD_UPDATED_SUCCESSFULLY}`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // função que tem objetivo de atualizar o veiculo da carga
  async executeUpdateVehicle(id, vehicleId) {
    try {
      //valida existencia da carga
      await this.validatingLoadForId(id);

      //busca um veículo pelo vehicleId
      const validatingVehicle = await prismaClient.vehicles.findFirst({
        where: {
          id: vehicleId,
        },
      });
      //valida a existencia do veículo
      if (!validatingVehicle) {
        throw new Error(ERROR_MESSAGES_LOAD.VEHICLE_NOT_FOUND);
      }
      //valida se o veículo não esta com alguma carga em aberto
      if (!["entregue", "retornada"].includes(validatingVehicle.status)) {
        throw new Error(ERROR_MESSAGES_LOAD.OPEN_LOAD);
      }
      // atualiza a carga para o novo veículo
      await prismaClient.load.update({
        where: {
          id: id,
        },
        data: {
          vehiclesId: vehicleId,
        },
      });
      return `Alteração de veículo na ${SUCESS_MESSAGE_LOAD.LOAD_UPDATED_SUCCESSFULLY}`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // função que tem objetivo de atualizar o usuario da carga
  async executeUpdateUser(id, userId) {
    try {
      //valida existencia da carga
      await this.validatingLoadForId(id);

      //buscando usuario pelo id
      const validatingUser = await prismaClient.user.findUnique({
        where: {
          id: userId,
        },
      });
      //validando a existencia do retorno de usuario
      if (!validatingUser) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND);
      }
      // atualizando o usuario alocado na carga
      await prismaClient.load.update({
        where: {
          id: id,
        },
        data: {
          userId: userId,
        },
      });
      return `Alteração de usuário na ${SUCESS_MESSAGE_LOAD.LOAD_UPDATED_SUCCESSFULLY}`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // função que tem como objetivo verificar e chamar a função que vai atualizar o status da carga
  async executeUpdateStatus(id, status) {
    try {
      await prismaClient.$transaction(async (tx) => {
        //função que valida a existecia de uma carga atravez do id
        await this.validatingLoadForId(id);
        //faz uma busca em cargas atrás da carga referente ao id passado
        const checkStatus = await tx.load.findUnique({
          where: {
            id: id,
          },
        });
        if (checkStatus.status === status) {
          throw new Error(ERROR_MESSAGES_LOAD.ERROR_DUPLICATE_STATUS);
        }
        //verifica se status é igual à uma das 4 palavras e chama a função que faz a alteração do status da carga e função que altera o status delivery de todos os carrinho associados a esta carga.
        if (
          ["entregue", "retornada", "transporte", "fechada"].includes(status)
        ) {
          await this.updateStatus(tx, id, status);
          await this.updateCartStatusDelivery(tx, id, status);
        }
      });
      return `${SUCESS_MESSAGE_LOAD.LOAD_UPDATED_SUCCESSFULLY} para ${status}`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // função que atualiza o status
  async updateStatus(tx, id, status) {
    await tx.load.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });
    return `O status da carga foi alterado para: ${status}`;
  }
  // atualiza o statusDelivery dos carrinho conforme a atualização de status da carga
  async updateCartStatusDelivery(tx, id, status) {
    let newStatusDelivery;
    //função chamada para finaliza carga, a mesma ao atualizar seu status, vai atulizar todos os carrinhos que são associados a ela.
    switch (status) {
      case "fechada":
      case "transporte":
        newStatusDelivery = "carregado";
        break;
      case "entregue":
        newStatusDelivery = "entregue";
        break;
      case "retornada":
        newStatusDelivery = "devolvido";
        break;
      default:
    }
    // atualiza todos os carrinhos que são associados a esta carga
    await tx.cart.updateMany({
      where: {
        loadId: id,
      },
      data: {
        statusDelivery: newStatusDelivery,
      },
    });
  }
}

export { UpdateLoadService };
