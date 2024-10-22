import prismaClient from "../../prisma/index.js"

class ReadPaymentService {
    async execute(filters) {
        try {
            const payments = await prismaClient.payment.findMany({
                where: {
                    id: filters.id ? Number(filters.id) : undefined,
                    userId: filters.userId ? filters.userId : undefined,
                    clientId: filters.clientId ? Number(filters.clientId) : undefined ,
                    paymentId: filters.paymentId ? Number(filters.paymentId) : undefined ,
                    createdAt: {    
                        gte: filters.createdFrom ,
                        lte: filters.createdUntil
                    }
                }
            })

            return payments
        } catch (error) {
            throw error
        }
    }
}

export { ReadPaymentService }