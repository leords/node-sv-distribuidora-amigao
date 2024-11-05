import prismaClient from "../../prisma/index.js";

class DeleteVehicleService {
  async execute(id) {
    try {
      const existingVehicle = await prismaClient.vehicles.findUnique({
        where: { id },
      });

      if (!existingVehicle) {
        throw new Error("Não foi encontrado nenhum veículo com este ID");
      }

      const deletedVehicle = await prismaClient.vehicles.delete({
        where: {
          id: id,
        },
      });

      return deletedVehicle;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export { DeleteVehicleService };
