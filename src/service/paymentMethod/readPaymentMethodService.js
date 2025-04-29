import prismaClient from "../../prisma/index.js"

class ReadPaymentMethodService {
    async execute(id) {
        try {
            const methods = await prismaClient.paymentMethod.findMany({
                where: {
                    id: id ? Number(id) : undefined
                }
            });

            return methods
        } catch (error) {
            throw error
        }
    }
}

export {ReadPaymentMethodService} 