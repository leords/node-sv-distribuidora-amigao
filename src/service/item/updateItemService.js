import { Decimal } from "@prisma/client/runtime/index.js";
import { ERROR_MESSAGES_CART_ITEM } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"


class UpdateItemService {
    async execute(id, quantify) {

        try {
            const item = await prismaClient.cartItem.findUnique({
                where: {
                    id: id
                }
            });

            if(!item) {
                throw new Error(ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND);
            }

            const newPrice = item.price * quantify;

            const updateItem = await prismaClient.cartItem.update({
                where: {
                    id: id
                },
                data: {
                    quantity: quantify,
                    total: Decimal(newPrice)
                }
            });

            return updateItem;

        } catch (error) {
            console.log(error)
            throw error
        }
    }
}


export { UpdateItemService }