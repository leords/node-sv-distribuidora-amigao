import prismaClient from "../../prisma/index.js";

class ReadLoadService {
  async execute(filters) {
    try {
      const readLoad = await prismaClient.load.findMany({
        where: {
          // Filtro por ID da carga, se enviado
          id: filters.id ? Number(filters.id) : undefined,

          // Filtro por ID do veículo, se enviado
          vehiclesId: filters.vehiclesId
            ? Number(filters.vehiclesId)
            : undefined,

          // Filtro por ID do usuário, se enviado
          userId: filters.userId ? Number(filters.userId) : undefined,

          // Filtro por status da carga, se enviado (ex: "aberta", "fechada", etc)
          status: filters.status || undefined,

          // Filtro por intervalo de datas de criação (from → until)
          createdAt: {
            gte: filters.createdFrom || undefined, // Data inicial
            lte: filters.createdUntil || undefined, // Data final
          },

          // CORREÇÃO: Busca parcial por nome da carga (não containsLyrics)
          name: filters.containsLyrics
            ? {
                contains: filters.containsLyrics, // Trecho do nome a buscar
              }
            : undefined,

          // Filtro: busca exata pela placa do veículo relacionado à carga
          vehicle: filters.licensePlate
            ? {
                licensePlate: {
                  equals: filters.licensePlate, // Placa exata
                },
              }
            : undefined,
        },

        // Inclui os dados relacionados de:
        include: {
          carts: {
            include: {
              client: true, // Cliente da carga
              cartItems: true, // Produtos inseridos na carga
            },
          },
          vehicle: true, // Dados do veículo usado na carga
          user: true, // Dados do usuário que criou a carga
        },
      });

      return readLoad;
    } catch (error) {
      console.log(error); // Loga o erro no console do servidor
      throw error; // Lança o erro para o controller tratar
    }
  }
}

export { ReadLoadService };
