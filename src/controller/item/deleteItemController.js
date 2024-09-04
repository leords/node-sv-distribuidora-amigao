import { ERROR_MESSAGES_CART_ITEM, HTTP_STATUS_CODES, SUCESS_MESSAGES_CART_ITEM } from "../../config/httpStatusCodes.js";
import { DeleteItemService } from "../../service/item/deleteItemService.js";
import { handleErros } from "../../utils/errorHandler.js";


class DeleteItemController {
    async handler(req, res) {
        try {
            const { id } = req.body;

            if(!id) {
                throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_ID_EMPTY);
            }
            if(typeof id !== 'number') {
                throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_PRODUCT_ID);
            }

            const service = new DeleteItemService();
            const result = await service.execute(id);

            return res.status(HTTP_STATUS_CODES.OK).json({
                message: SUCESS_MESSAGES_CART_ITEM.PRODUCT_DELETED_SUCCESSFULLY,
                product: result
            });

        } catch (error) {
            const { status, message } = handleErros(error);
            res.status(status).json({message});
        }
    }
}

export { DeleteItemController }