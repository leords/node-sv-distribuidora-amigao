import prismaClient from "../../prisma/index.js";

class ReadLoadService {
  async execute(filters) {
    try {
      const readLoad = await prismaClient.load.findMany({
        where: {
          id: filters.id ? Number(filters.id) : undefined,
          vehiclesId: filters.vehiclesId
            ? Number(filters.vehiclesId)
            : undefined,
          userId: filters.userId ? Number(filters.userId) : undefined,
          status: filters.status ? filters.status : undefined,
          createdAt: {
            gte: filters.createdFrom || undefined,
            lte: filters.createdUntil || undefined,
          },
        },
        include: {
          carts: {
            include: {
              client: true, // <- traz os dados completos do cliente
              cartItems: true, // <- se quiser trazer os produtos
            },
          },
          vehicle: true, // se quiser também os dados do veículo da carga
          user: true, // e o usuário que criou a carga
        },
      });
      return readLoad;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export { ReadLoadService };
