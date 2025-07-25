import prismaClient from "../../prisma/index.js"

class ReadItemService {
    async execute(id) {
        try {
            const itens = await prismaClient.cartItem.findMany({
                where: {
                    cartId: id ? id : undefined
                }
            });

            return itens
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export { ReadItemService }