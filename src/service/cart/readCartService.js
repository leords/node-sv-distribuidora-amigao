import { ERROR_MESSAGES_CART_ITEM } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"


class ReadCartService {
    async execute(filters) {
        try {            
            const carts = await prismaClient.cart.aggregate({
                _sum: {
                    total: true
                },
                _count: {
                    total: true
                },
                _max: {
                    total: true
                },
                _min: {
                    total: true
                },
                _avg: {
                    total: true,
                    clientId: true
                },
                where: {
                    id: filters.id ? Number(filters.id) : undefined,
                    clientId: filters.clientId ? Number(filters.clientId) : undefined,
                    userId: filters.userId ? Number(filters.userId) : undefined,
                    createdAt: {
                        gte: filters.createdFrom || undefined,
                        lte: filters.createdUntil || undefined
                    }
                },
            });

            const itens = await prismaClient.cart.findMany({
                where: {
                    id: filters.id ? Number(filters.id) : undefined,
                    clientId: filters.clientId ? Number(filters.clientId) : undefined,
                    userId: filters.userId ? Number(filters.userId) : undefined,
                    createdAt: {
                        gte: filters.createdFrom || undefined,
                        lte: filters.createdUntil || undefined
                    }
                },
                include: {
                    cartItems: true
                }
            })


            return itens
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}


export { ReadCartService }