import {
  ERROR_MESSAGES_USER,
  ERROR_MESSAGES_VEHICLE,
} from "../../config/httpStatusCodes";
import prismaClient from "../../prisma";

class UpdateVehicleService {
  async executeUpdateVehicleStatus(id, status) {
    try {
      const vehicleExisting = await prismaClient.vehicles.findUnique({
        where: id,
      });
      if (!vehicleExisting) {
        throw new Error(ERROR_MESSAGES_VEHICLE.VEHICLE_NOT_FOUND);
      }
      const editStatusVehicle = await prismaClient.vehicles.update({
        where: {
          id: id,
        },
        data: status,
      });
      return editStatusVehicle;
    } catch (error) {
      throw error;
    }
  }

  async executeUpdateVehicleLicensePlate(id, licensePlate) {
    try {
      const vehicleExisting = await prismaClient.vehicles.findUnique({
        where: id,
      });
      if (!vehicleExisting) {
        throw new Error(ERROR_MESSAGES_VEHICLE.VEHICLE_NOT_FOUND);
      }
      const editLicensePlateVehicle = await prismaClient.vehicles.update({
        where: {
          id: id,
        },
        data: licensePlate,
      });
      return editLicensePlateVehicle;
    } catch (error) {
      throw error;
    }
  }
}

export { UpdateVehicleService };
