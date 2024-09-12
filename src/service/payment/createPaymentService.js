import prismaClient from "../../prisma/index.js";

class CreatePaymentService {
    async execute(name) {
        try {
            const newPayment = await prismaClient.paymentMethod.create({
                data: {
                    name: name
                }
            });
            return newPayment
            
        } catch (error) {
            throw error
        }
    }
}

export { CreatePaymentService }