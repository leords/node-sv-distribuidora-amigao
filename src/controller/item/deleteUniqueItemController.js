import {
  ERROR_MESSAGES_CART_ITEM,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_CART_ITEM,
} from "../../config/httpStatusCodes.js";
import { DeleteItemService } from "../../service/item/deleteItemService.js";
import { handleErros } from "../../utils/errorHandler.js";

class DeleteUniqueItemController {
  async handle(req, res) {
    const { id, cartId } = req.body;

    try {
      if (!id) {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_ID_EMPTY);
      }
      if (typeof id !== "number") {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_PRODUCT_ID);
      }
      if (!cartId) {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY);
      }
      if (typeof cartId !== "number") {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_TYPE);
      }

      const service = new DeleteItemService();
      const result = await service.executeDeleteUnique(id, cartId);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_CART_ITEM.PRODUCT_DELETED_SUCCESSFULLY,
        product: result,
      });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { DeleteUniqueItemController };
