import {
  ERROR_MESSAGES_VEHICLE,
  HTTP_STATUS_CODES,
} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class CreateVehicleService {
  async execute(model, licensePlate, brand, weight) {
    try {
      const existingVehicle = await prismaClient.vehicles.findUnique({
        where: {
          licensePlate: licensePlate,
        },
      });
      if (existingVehicle) {
        throw new Error(ERROR_MESSAGES_VEHICLE.VEHICLE_ALREADY_EXISTS);
      }

      const newVehicle = await prismaClient.vehicles.create({
        data: {
          model,
          licensePlate,
          brand,
          weight,
        },
      });
      return newVehicle;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export { CreateVehicleService };
