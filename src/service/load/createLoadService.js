import {
  ERROR_MESSAGES_LOAD,
  ERROR_MESSAGES_USER,
  ERROR_MESSAGES_VEHICLE,
} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class CreateLoadService {
  async execute(name, vehiclesId, userId) {
    try {
      //buscando usuário com o userID
      const validatingUser = await prismaClient.user.findUnique({
        where: {
          id: userId,
        },
      });
      //validando a existencia do usuário
      if (!validatingUser) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND);
      }
      //buscando veículo com o vehicleID
      const existingVehicle = await prismaClient.vehicles.findUnique({
        where: {
          id: vehiclesId,
        },
      });
      //validando a existencia do veículo
      if (!existingVehicle) {
        throw new Error(ERROR_MESSAGES_VEHICLE.VEHICLE_NOT_FOUND);
      }
      //buscando se não existe alguma carga referenciada a este vehicleID em estado que não seja |entregue| ou |retornada|
      const existingLoad = await prismaClient.load.findFirst({
        where: {
          vehiclesId: vehiclesId,
          status: {
            notIn: ["entregue", "retornada"],
          },
        },
      });
      //validando se existe carga na busca acima
      if (existingLoad) {
        throw new Error(ERROR_MESSAGES_LOAD.OPEN_LOAD);
      }
      //criando uma nova carga
      const newLoad = await prismaClient.load.create({
        data: {
          name: name.toLowerCase(),
          vehiclesId,
          userId,
        },
      });
      return newLoad;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { CreateLoadService };
