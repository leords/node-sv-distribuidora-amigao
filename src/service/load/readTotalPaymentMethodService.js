import prismaClient from "../../prisma";

class ReadTotalPaymentMethodService {
  async execute() {
    try {
      const totalPaymentMethod = prismaClient.cart.aggregate({
        _sum: {
          total: true,
        },
        where: {},
      });
    } catch (error) {}
  }
}

export { ReadTotalPaymentMethodService };
