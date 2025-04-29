import prismaClient from "../../prisma/index.js"

class ReadClientService {
    async execute(filters) {
        try {
            const clients = await prismaClient.client.findMany({
                where: {
                    name: filters.name,
                    city: filters.city,
                    salesman: filters.salesman,
                    serviceDay: filters.serviceDay,
                    status: filters.status
                }
            });

            return clients
            
        } catch (error) {
            throw error; 
        }
    }
}

export { ReadClientService }