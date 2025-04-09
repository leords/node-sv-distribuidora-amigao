import { ERROR_MESSAGES_CART } from "../../config/httpStatusCodes.js"
import prismaClient from "../../prisma/index.js"
import { InsertCartToLoadService } from "./InsertCartToLoadService.js"

class DeleteCartToLoadService {
    async execute(idCart) {
        try {
        //verifica se o carrinho existe e se o mesmo não está fechado
        const validationCart = await prismaClient.cart.findUnique({
            where: {
                id: idCart
            }
        });
        if(!validationCart) {
            throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND)
        }
        if(validationCart.loadId === null) {
            throw new Error(ERROR_MESSAGES_CART.CART_NOT_ASSOCIATED)
        }
        if(validationCart.statusDelivery == "entregue") {
            throw new Error(`${ERROR_MESSAGES_CART.CART_NOT_AVAILABLE} ${'entregue'}`)
        }

        const cartExisting = await prismaClient.cart.findUnique({
            where: {
                id: idCart
            }
        });
        if(!cartExisting) {
            throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND)
        }

        await prismaClient.cart.update({
            where: {
                id: idCart
            },
            data: {
                loadId: null,
                statusDelivery: "pendente"
            }
        });
        
        const updateLoad = new InsertCartToLoadService();
        await updateLoad.addValueAndWeight(cartExisting.loadId)

        } catch (error) {
            throw error;
        }
    }
}

export { DeleteCartToLoadService }