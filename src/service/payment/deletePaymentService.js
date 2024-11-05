import { ERROR_MESSAGES_PAYMENT } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class DeletePaymentService {
  async execute(id) {
    try {
      const existingPayment = await prismaClient.payment.findUnique({
        where: {
          id: id,
        },
      });

      if (existingPayment) {
        const deletePayment = await prismaClient.payment.delete({
          where: {
            id: id,
          },
        });

        return deletePayment;
      } else {
        throw new Error(ERROR_MESSAGES_PAYMENT.PAYMENT_NOT_FOUND);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { DeletePaymentService };
