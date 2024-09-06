import { ERROR_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"

class DeleteCartService {
    async execute(id) {
        try {

            // verifica a existencia do carrinho.
            const cartExisting = await prismaClient.cart.findUnique({
                where: {
                    id: id
                }
            });
            // caso não existir, retorna o erro.
            if(!cartExisting) {
                throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
            }

            // exclui todos os item do carrinho a ser excluido.
            await prismaClient.cartItem.deleteMany({
                where: {
                    cartId: cartExisting.clientId
                }
            });

            // exclui o carrinho.
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