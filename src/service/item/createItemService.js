import { ERROR_MESSAGES_CART, ERROR_MESSAGES_ITEM} from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"



class CreateItemService {
    async execute(cartId, productId, quantity) {
        try {
            const cart = await prismaClient.cart.findUnique({
                where: {
                    id: cartId
                }
            });

            if (!cart) {
                throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
            }


            const product = await prismaClient.product.findUnique({
                where: {
                    id: productId
                }
            });

            if (!product) {
                throw new Error(ERROR_MESSAGES_ITEM.PRODUCT_NOT_FOUND);
            }

            const total = product.price * quantity;

            const newItemToCard = await prismaClient.cartItem.create({
                data: {
                    cartId,
                    productId,
                    productName: product.name,
                    price: product.price,
                    quantity,
                    total
                }
            });

            return newItemToCard;

        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export { CreateItemService }