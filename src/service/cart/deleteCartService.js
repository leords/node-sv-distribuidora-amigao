import { ERROR_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"

class DeleteCartService {
    async execute(id) {
        try {

            const cartExisting = prismaClient.cart.findUnique({
                where: {
                    id: id
                }
            });

            if(!cartExisting) {
                throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
            }

            const deleteCart = prismaClient.cart.delete({
                where: {
                    id: id
                }
            });

            return deleteCart;

        } catch (error) {
            
        }
    }
}

export { DeleteCartService }