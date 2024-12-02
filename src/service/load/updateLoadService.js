import {
  ERROR_MESSAGES_LOAD,
  ERROR_MESSAGES_USER,
  SUCESS_MESSAGE_LOAD,
} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class UpdateLoadService {
  // função que tem objetivo de validar a existencia de CARGA com o ID passado!
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

  async executeUpdateName(id, name) {
    try {
      //valida existencia da carga
      await this.validatingLoadForId(id);

      //busca uma carga com o name passado
      const nameAlreadyExists = await prismaClient.load.findFirst({
        where: {
          name: name,
        },
      });
      if (
        nameAlreadyExists &&
        ["entregue", "retornada"].includes(nameAlreadyExists.status)
      ) {
        throw new Error(ERROR_MESSAGES_LOAD.LOAD_NAME_PENDING);
      }

      await prismaClient.load.update({
        where: {
          id: id,
        },
        data: {
          name: name,
        },
      });

      return `Nome da "${SUCESS_MESSAGE_LOAD.LOAD_UPDATED_SUCCESSFULLY}"`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

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
      if (["entregue", "retornada"].includes(validatingVehicle.status)) {
        throw new Error(ERROR_MESSAGES_LOAD.OPEN_LOAD);
      }

      await prismaClient.load.update({
        where: {
          id: id,
        },
        data: {
          vehiclesId: vehicleId,
        },
      });
      return `Alteração de veículo na "${SUCESS_MESSAGE_LOAD.LOAD_UPDATED_SUCCESSFULLY}"`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async executeUpdateUser(id, userId) {
    try {
      //valida existencia da carga
      await this.validatingLoadForId(id);

      //buscando
      const validatingUser = await prismaClient.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!validatingUser) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND);
      }

      await prismaClient.load.update({
        where: {
          id: id,
        },
        data: {
          userId: userId,
        },
      });
      return `Alteração de usuário na "${SUCESS_MESSAGE_LOAD.LOAD_UPDATED_SUCCESSFULLY}"`;
    } catch (error) {
      throw new Error();
    }
  }

  async executeUpdateStatus(id, status) {
    try {
      //valida existencia da carga
      await this.validatingLoadForId(id);
      const checkStatus = await prismaClient.load.findUnique({
        where: {
          id: id,
        },
      });
      if (checkStatus.status === status) {
        throw new Error(ERROR_MESSAGES_LOAD.ERROR_DUPLICATE_STATUS);
      }
      await prismaClient.load.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });
      return `Alteração de status na "${SUCESS_MESSAGE_LOAD.LOAD_UPDATED_SUCCESSFULLY}"`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { UpdateLoadService };
