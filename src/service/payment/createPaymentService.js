import { ERROR_MESSAGES_PAYMENT } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"

class createPaymentService {
    async execute(value, clientId, paymentId, userId) {
        try {

            const accumulatedCartsPending = await prismaClient.cart.aggregate({
                _sum: {
                    total: true
                },
                where: {
                    clientId: clientId,
                    paymentId: 1
                }
            });
            const totalCartsValue = accumulatedCartsPending._sum.total || 0;

            if(totalCartsValue === 0) {
                throw new Error(ERROR_MESSAGES_PAYMENT.NO_PENDING)
            }
            if(totalCartsValue < value) {
                throw new Error(ERROR_MESSAGES_PAYMENT.VALUE_GREATER_PENDING)
            }

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
            //console.log(error)
            throw error
        }
    }
}

export { createPaymentService }