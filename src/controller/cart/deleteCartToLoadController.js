import { ERROR_MESSAGES_CART, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js";
import { DeleteCartToLoadService } from "../../service/cart/deleteCartToLoadService.js";
import { handleErros } from "../../utils/errorHandler.js";

class DeleteCartToLoadController {
    async handle(req, res) {
        const { idCart } = req.body;
        try {
            if(!idCart) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_ID_EMPTY)
            }
            if(isNaN(idCart)) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_ID)
            }

            const service = new DeleteCartToLoadService();
            const result = await service.execute(idCart);

            return res
            .status(HTTP_STATUS_CODES.OK)
            .json({
                message: 'Carrinho foi removido da carga',
                cart: result
            });
            
        } catch (error) {
            const {status, message} = handleErros(error);
            return res.status(status).json({ error: message })
        }
    }
}

export {DeleteCartToLoadController}