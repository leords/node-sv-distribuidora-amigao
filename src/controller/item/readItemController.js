import { ERROR_MESSAGES_CART_ITEM, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js";
import { ReadItemService } from "../../service/item/readItemService.js";
import { handleErros } from "../../utils/errorHandler.js";


class ReadItemController {
    async handle(req, res) {
        const  id = req.query.id ? Number(req.query.id) : undefined
        try {
            if(id && isNaN(id)) {
                throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_TYPE);
            }
            
            const service = new ReadItemService();
            const result = await service.execute(id)

            return res.status(HTTP_STATUS_CODES.OK).json({result})
        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message})
        }
    }
}

export { ReadItemController }