import { Decimal } from "@prisma/client/runtime/index.js";
import { ERROR_MESSAGES_CART, ERROR_MESSAGES_CART_ITEM} from "../../config/httpStatusCodes.js";
import { PrismaClient } from "@prisma/client";



class CreateItemService {
    async execute(cartId, productId, quantity) {

        const prisma = new PrismaClient()

        try {
            //para executar múltiplas operações de leitura e escrita de forma atômica.
            const result = await prisma.$transaction(async (tx) => {

                // Busca no banco o cart referente ao ID passado
                const cart = await tx.cart.findUnique({
                    where: {
                        id: cartId
                    }
                });
                // confere a existencia do cart e trata com erro
                if (!cart) {
                    throw new Error(ERROR_MESSAGES_CART.CART_NOT_FOUND);
                }
    
                // Busca no banco o product referente ao ID passado
                const product = await tx.product.findUnique({
                    where: {
                        id: productId
                    }
                });
                // confere a existencia do product e trata com erro
                if (!product) {
                    throw new Error(ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND);
                }
                // variável total recebendo o valor da quantidade passada pelo usuário, multiplicado pelo preço do product
                const total = product.price * quantity;
                // criando um novo CartItem
                const newItemToCard = await tx.cartItem.create({
                    data: {
                        cartId,
                        productId,
                        productName: product.name,
                        price: product.price,
                        quantity,
                        total
                    }
                });
                // agregando o valor total de todos os CartItem relacionados a este CartId.
                const sumCartItem = await tx.cartItem.aggregate({
                    _sum: {
                        total: true
                    },
                    where: {
                        cartId: cartId
                    }
                });
                // calculando novamente a quantidade dos cartItem(item) que estão relacionados ao cartID(carrinho) após a exclusão do item
                const sumQuantityCartItem = await tx.cartItem.aggregate({
                    _sum: {
                        quantity: true
                    },
                    where: {
                        cartId: cartId
                    }
                });
                // atualizando o total do Cart com o retorno da qauntidade e com a soma de todos os CartItem relacionados à ele.
                await tx.cart.update({
                    where: {
                        id: cartId
                    },
                    data: {
                        total: Decimal(sumCartItem._sum.total) || 0,
                        quantity:sumQuantityCartItem._sum.quantity || 0
                    }
                })
    
                return newItemToCard;
            });

            return result

            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export { CreateItemService }