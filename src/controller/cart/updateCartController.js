import { ERROR_MESSAGES_CART, HTTP_STATUS_CODES, SUCESS_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import { UpdateCartService } from "../../service/cart/updateCartService.js";
import { handleErros } from "../../utils/errorHandler.js";

class UpdateCartController {
    async handle(req, res) {
        const { id, statusDelivery } = req.body;

        try {     
            if(!id) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_ID_EMPTY);
            }
            if(typeof id !== 'number' || id <= 0) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_ID)
            }
            if(!statusDelivery) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_STATUS_DELIVERY_EMPTY)
            }
            if(typeof statusDelivery !== 'string') {
                throw new Error(ERROR_MESSAGES_CART.INVALID_STATUS_DELIVERY)
            }

            const allowedStatuses = ['carregado', 'entregue', 'devolvido', 'pendente'];

            if (!allowedStatuses.includes(statusDelivery)) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_STATUS_DELIVERY_TYPE)
            }

            const service = new UpdateCartService();
            const result = await service.execute(id, statusDelivery);

            return res.status(HTTP_STATUS_CODES.OK).json({
                message: SUCESS_MESSAGES_CART.CART_UPDATED_SUCCESSFULLY,
                cart: result
            });
            
        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message});
        }
    }
}

export { UpdateCartController }