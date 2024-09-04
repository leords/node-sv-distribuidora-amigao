import { ERROR_MESSAGES_CART_ITEM, HTTP_STATUS_CODES, SUCESS_MESSAGES_CART_ITEM } from "../../config/httpStatusCodes.js";
import { UpdateItemService } from "../../service/item/updateItemService.js";
import { handleErros } from "../../utils/errorHandler.js";


class UpdateItemController {
    async handle(req, res) {
        try {
            const { id, quantify } = req.body;

            if(!id) {
                throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_ID_EMPTY);
            }
            if(typeof id !== 'number') {
                throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID);
            }
            if(!quantify) {
                throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_QUANTIFY_EMPTY);
            }
            if(typeof quantify !== 'number') {
                throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_TYPE_QUANTITY);
            }
            if(quantify < 1 || quantify > 100) {
                throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_QUATIFY_RANGE);
            }

            const service = new UpdateItemService();
            const result = await service.execute(id, quantify);

            return res.status(HTTP_STATUS_CODES.OK).json({
                message: SUCESS_MESSAGES_CART_ITEM.PRODUCT_UPDATED_SUCCESSFULLY,
                item: result
            });

        } catch (error) {
            const { status, message } = handleErros(error);
            res.status(status).json({message});
        }
    }
}


export { UpdateItemController }