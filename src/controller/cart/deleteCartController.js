import { ERROR_MESSAGES_CART, HTTP_STATUS_CODES, SUCESS_MESSAGES_CART } from "../../config/httpStatusCodes.js";
import { DeleteCartService } from "../../service/cart/deleteCartService.js";
import { handleErros } from "../../utils/errorHandler.js";


class DeleteCartController {
    async handle(req, res) {
        try {
            const {id} = req.body;
           
            if(!id) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_ID_EMPTY);
            }
            if(typeof id !== 'number') {
                throw new Error(ERROR_MESSAGES_CART.INVALID_ID_EMPTY);
            }

            const service = new DeleteCartService();
            const result = await service.execute(id);

            return res.status(HTTP_STATUS_CODES.OK).json({
                message: SUCESS_MESSAGES_CART.CART_DELETED_SUCEESSFULLY ,
                cart: result
            })
        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json(message);
        }
    }
}

export { DeleteCartController }