import prismaClient from "../../prisma/index.js"


class ReadCartService {
    async execute(filters) {
        try {            
            const carts = await prismaClient.cart.findMany({
                where: {
                    id: filters.id ? Number(filters.id) : undefined,
                    clientId: filters.clientId ? Number(filters.clientId) : undefined,
                    userId: filters.userId ? Number(filters.userId) : undefined,
                    createdAt: {
                        gte: filters.createdFrom || undefined,
                        lte: filters.createdUntil || undefined
                    }
                }
            });
            return carts
            
        } catch (error) {
            throw error
        }
    }
}


export { ReadCartService }