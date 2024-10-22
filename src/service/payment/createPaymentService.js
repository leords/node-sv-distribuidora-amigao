import prismaClient from "../../prisma/index.js"

class createPaymentService {
    async execute(value, clientId, paymentId, userId) {
        try {
            const newPayment = await prismaClient.payment.create({
                data: {
                    value: value,
                    clientId: clientId,
                    paymentId: paymentId,
                    userId: userId
                }
            });

            return newPayment
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export { createPaymentService }