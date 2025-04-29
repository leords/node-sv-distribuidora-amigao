import prismaClient from "../../prisma/index.js";

class ReadCartService {
  async searchSale(filters) {
    try {
      const carts = await prismaClient.cart.aggregate({
        _sum: {
          total: true,
        },
        _count: {
          total: true,
        },
        _max: {
          total: true,
        },
        _min: {
          total: true,
        },
        _avg: {
          total: true,
        },
        where: {
          id: filters.id ? Number(filters.id) : undefined,
          clientId: filters.clientId ? filters.clientId : undefined,
          userId: filters.userId ? Number(filters.userId) : undefined,
          paymentId: filters.paymentId ? Number(filters.paymentId) : undefined,
          createdAt: {
            gte: filters.createdFrom || undefined,
            lte: filters.createdUntil || undefined,
          },
        },
      });

      return carts;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async searchCart(filters) {
    try {
      const itens = await prismaClient.cart.findMany({
        where: {
          id: filters.id ? Number(filters.id) : undefined,
          clientId: filters.clientId ? filters.clientId : undefined,
          userId: filters.userId ? Number(filters.userId) : undefined,
          paymentId: filters.paymentId ? Number(filters.paymentId) : undefined,
          statusDelivery: filters.statusDelivery || undefined,
          createdAt: {
            gte: filters.createdFrom || undefined,
            lte: filters.createdUntil || undefined,
          },
        },
        // include: faz a inclusão de propriedades de entidades associadas
        include: {
          cartItems: true,
          client: {
            select: {
              name: true,
              city: true
            },
          },
          payment: {
            select: {
              name: true
            },
          },
          user: {
            select: {
              name: true
            }
          },
          // aqui consigo acessar vehicle por movitos que LOAD tem associação com CART.
          load: {
            select: {
              name: true,
              vehicle: {
                select: {
                  model: true
                }
              }
            }
          }
        },
      });

      return itens;
    } catch (error) {
      throw error;
    }
  }
}

export { ReadCartService };
