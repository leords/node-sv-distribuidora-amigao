import { ERROR_MESSAGES_CART, ERROR_MESSAGES_CLIENT, HTTP_STATUS_CODES, SUCESS_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import { CreateCartService } from "../../service/cart/createCartService.js";
import { handleErros } from "../../utils/errorHandler.js";


class CreateCartController {
    async handle(req, res) {
        const { clientId, userId, paymentId } = req.body;
        try {
            
            if (!typeof clientId === 'string') {
                throw new Error(ERROR_MESSAGES_CART.INVALID_CLIENT_ID_TO_CART);
            }

            if (!typeof userId === 'number') {
                throw new Error(ERROR_MESSAGES_CART.INVALID_USER_ID_TO_CART);
            }
            if(!typeof paymentId === 'number') {
                throw new Error(ERROR_MESSAGES_CART.INVALID_PAYMENT_ID_TO_CART);
            }

            const service = new CreateCartService();
            const result = await service.execute(clientId, userId, paymentId);

            return res.status(HTTP_STATUS_CODES.CREATED).json({
                message: SUCESS_MESSAGES_CART.CART_CREATED_SUCCESSFULLY,
                cart: result
            })

        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({message});
        }
    }
}

export { CreateCartController }