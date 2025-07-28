import prismaClient from "../../prisma/index.js";

class ReadClientService {
  async execute(filters) {
    try {
      const clients = await prismaClient.client.findMany({
        where: {
          id: filters.id,
          name: filters.name,
          city: filters.city,
          salesman: filters.salesman,
          serviceDay: filters.serviceDay,
          status: filters.status,
          cnpj: filters.cnpj,
        },
      });

      return clients;
    } catch (error) {
      throw error;
    }
  }
}

export { ReadClientService };
