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
        throw new Error("Um véiculo com está placa já foi cadastrado!");
      }

      const newVehicle = await prismaClient.vehicles.create({
        data: {
          model: model,
          licensePlate: licensePlate,
          brand: brand,
          weight: weight,
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
