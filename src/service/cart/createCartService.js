import prismaClient from "../../prisma/index.js"


class CreateCartService {
    async execute(clientId, userId, paymentId) {
        console.log(clientId, userId, paymentId )
        try {
            const newCart = await prismaClient.cart.create({
                data: {
                    clientId: clientId,
                    userId: userId,
                    paymentId: paymentId
                }
            });

            return newCart
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export { CreateCartService }