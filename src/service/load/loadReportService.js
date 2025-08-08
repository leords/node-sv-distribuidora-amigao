import prismaClient from "../../prisma/index.js";

class LoadReportService {
  async execute(id) {
    try {
      const resultado = await prismaClient.cartItem.groupBy({
        // Agrupa os resultados por ID e nome do produto
        by: ["productId", "productName"],

        // Filtra apenas pedidos associados
        where: {
          cart: {
            loadId: id, //ID da carga
          },
        },
        // Define os campos que vai ser somados.
        _sum: {
          quantity: true,
        },
        // Ordena de forma crescente os nomes.
        orderBy: {
          productName: "asc",
        },
      });

      return resultado;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { LoadReportService };
