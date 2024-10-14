import { ERROR_MESSAGES_PRODUCT } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class GetClientBaseService {
    async execute(clients) {
        console.log('service', clients);
        try {
            if( clients.length === 0 ) {
                throw new Error(ERROR_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_ERROR)
            }
            for (const client of clients) {
                await prismaClient.client.upsert({
                    where: {
                        id: String(client.Id),
                    }, 
                    update: {
                        name: client.Nome,
                        phone: String(client.Telefone),
                        address: client.Endereco,
                        city: client.Cidade,
                        salesman: client.Vendedor,
                        serviceDay: client.Atendimento,
                    },
                    create: {
                        id: String(client.Id),
                        name: client.Nome,
                        phone: String(client.Telefone),
                        address: client.Endereco,
                        city: client.Cidade,
                        salesman: client.Vendedor,
                        serviceDay: client.Atendimento,
                    }
                });
            }
        } catch (error) {
            console.log('erro no service', error);
            throw error
        }
    } 
}


export { GetClientBaseService }