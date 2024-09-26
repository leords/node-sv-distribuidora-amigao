import { ERROR_MESSAGES_PAYMENT } from "../../config/httpStatusCodes";
import prismaClient from "../../prisma"

class DeletePaymentService {
    async execute(id) {
        try {

            const existingPayment = await prismaClient.paymentMethod.findUnique({
                where: {
                    id: id
                }
            });

            if(!existingPayment) {
                throw new Error(ERROR_MESSAGES_PAYMENT.PAYMENT_NOT_FOUND)
            }

            const deletePayment = await prismaClient.paymentMethod.delete({
                where: {
                    id: id
                }
            });
            return deletePayment
        } catch (error) {
            throw error
        }

    }
}

export { DeletePaymentService }