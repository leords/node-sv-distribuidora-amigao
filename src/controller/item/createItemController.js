import { ERROR_MESSAGES_ITEM, HTTP_STATUS_CODES, SUCESS_MESSAGES_ITEM } from "../../config/httpStatusCodes.js";
import { CreateItemService } from "../../service/item/createItemService.js";
import { handleErros } from "../../utils/errorHandler.js";



class CreateItemController {
  async handle(req, res) {
    try {
      const {cartId, productId, quantity} = req.body;

      if(!typeof cartId === 'number') {
        throw new Error(ERROR_MESSAGES_ITEM.INVALID_CART_ID);
      }
      if(!typeof productId === 'number') {
        throw new Error(ERROR_MESSAGES_ITEM.INVALID_PRODUCT_ID);
      }
      if(!typeof quantity === 'number') {
        throw new Error(ERROR_MESSAGES_ITEM.INVALID_TYPE_QUANTITY);
      }

      const service = new CreateItemService();
      const result = await service.execute(cartId, productId, quantity);

      return res.status(HTTP_STATUS_CODES.CREATED).json({
        message: SUCESS_MESSAGES_ITEM.PRODUCT_REGISTERED_SUCCESSFULLY,
        item: result
      });

    } catch (error) {
        const {status, message} = handleErros(error);
        return res.status(status).json({message});
    }
  }
}

export { CreateItemController }