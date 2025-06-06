import {
  ERROR_MESSAGES_CART_ITEM,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_CART_ITEM,
} from "../../config/httpStatusCodes.js";
import { CreateItemService } from "../../service/item/createItemService.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateItemController {
  async handle(req, res) {
    const { cartId, productId, quantity } = req.body;

    try {
      if (!typeof cartId === "number") {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_TYPE);
      }
      if (!typeof productId === "number") {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_PRODUCT_ID);
      }
      if (!typeof quantity === "number") {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_TYPE_QUANTITY);
      }

      const service = new CreateItemService();
      const result = await service.execute(cartId, productId, quantity);

      return res.status(HTTP_STATUS_CODES.CREATED).json({
        message: SUCESS_MESSAGES_CART_ITEM.PRODUCT_REGISTERED_SUCCESSFULLY,
        item: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { CreateItemController };
