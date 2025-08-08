import { ERROR_MESSAGES_VEHICLE } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class UpdateVehicleService {
  async executeUpdateVehicleStatus(id, status) {
    try {
      const vehicleExisting = await prismaClient.vehicles.findUnique({
        where: {
          id: id,
        },
      });
      if (!vehicleExisting) {
        throw new Error(ERROR_MESSAGES_VEHICLE.VEHICLE_NOT_FOUND);
      }
      const editStatusVehicle = await prismaClient.vehicles.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });
      return editStatusVehicle;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async executeUpdateVehicleLicensePlate(id, licensePlate) {
    try {
      const vehicleExisting = await prismaClient.vehicles.findUnique({
        where: {
          id: id,
        },
      });
      if (!vehicleExisting) {
        throw new Error(ERROR_MESSAGES_VEHICLE.VEHICLE_NOT_FOUND);
      }
      const editLicensePlateVehicle = await prismaClient.vehicles.update({
        where: {
          id: id,
        },
        data: {
          licensePlate: licensePlate.toUpperCase(),
        },
      });
      return editLicensePlateVehicle;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { UpdateVehicleService };
