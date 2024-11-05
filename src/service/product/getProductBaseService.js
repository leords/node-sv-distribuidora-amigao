import {
  ERROR_MESSAGES_CLIENT,
  ERROR_MESSAGES_PRODUCT,
} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class GetProductBaseService {
  async execute(products) {
    console.log(products);
    try {
      if (products.length === 0) {
        throw new Error(ERROR_MESSAGES_PRODUCT.SYNCHRONIZE_CLIENT_ERROR);
      }
      for (const product of products) {
        await prismaClient.product.upsert({
          where: {
            id: product.Id,
          },
          update: {
            name: String(product.Produto),
            price: product.Valor,
            segment: product.Segmento,
            supplier: product.Fornecedor,
            weight: product.Peso ? product.Peso : 0,
          },
          create: {
            id: product.Id,
            name: String(product.Produto),
            price: product.Valor,
            segment: product.Segmento,
            supplier: product.Fornecedor,
            weight: product.Peso ? product.Peso : 0,
            status: true,
          },
        });
      }
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  }
}

export { GetProductBaseService };
