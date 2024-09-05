import { ERROR_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"

class DeleteCartService {
    async execute(id) {
        try {

            const cartExisting = await prismaClient.cart.findUnique({
                where: {
                    id: id
                }
            });

            if(!cartExisting) {
                throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
            }

            // verificar o que precisa ser excluido!!!!
            await prismaClient.cartItem.deleteMany({
                where: {
                    cartId: cartExisting.clientId
                }
            });


            const deleteCart = await prismaClient.cart.delete({
                where: {
                    id: id
                }
            });

            return deleteCart;

        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export { DeleteCartService }