import prismaClient from "../../prisma/index.js"


class CreateCartService {
    async execute(clientId, userId) {
        try {
            const newCart = await prismaClient.cart.create({
                data: {
                    clientId: clientId,
                    userId: userId
                }
            });

            return newCart
        } catch (error) {
            throw error
        }
    }
}

export { CreateCartService }