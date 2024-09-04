import { ERROR_MESSAGES_CART_ITEM } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"



class DeleteItemService {
    async execute(id) {
        try {

            const cartItem = await prismaClient.cartItem.findUnique({
                where: {
                    id: id
                }
            });

            if(!cartItem) {
                throw new Error(ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND);
            }

            const deleteCartItem = await prismaClient.cartItem.delete({
                where: {
                    id: id
                }
            });

            return deleteCartItem
        } catch (error) {
            throw error
        }
    }
}

export { DeleteItemService }