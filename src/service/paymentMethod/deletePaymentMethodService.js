import { ERROR_MESSAGES_PAYMENT_METHOD } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class DeletePaymentMethodService {
  async execute(id) {
    try {
      const existingPayment = await prismaClient.paymentMethod.findUnique({
        where: {
          id: id,
        },
      });

      if (!existingPayment) {
        throw new Error(ERROR_MESSAGES_PAYMENT_METHOD.PAYMENT_NOT_FOUND);
      }

      const deletePayment = await prismaClient.paymentMethod.delete({
        where: {
          id: id,
        },
      });
      return deletePayment;
    } catch (error) {
      throw error;
    }
  }
}

export { DeletePaymentMethodService };
