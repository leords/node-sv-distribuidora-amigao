import prismaClient from "../../prisma/index.js";

class ReadVehicleService {
  async execute(filters) {
    try {
      const readVerhicle = await prismaClient.vehicles.findMany({
        where: {
          id: filters.id ? Number(filters.id) : undefined,
          status: filters.status ? Boolean(filters.status) : undefined,
        },
      });
      return readVerhicle;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export { ReadVehicleService };
