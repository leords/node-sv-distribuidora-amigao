import {
  ERROR_MESSAGES_CART_ITEM,
  HTTP_STATUS_CODES,
  SUCESS_MESSAGES_CART_ITEM,
} from "../../config/httpStatusCodes.js";
import { DeleteItemService } from "../../service/item/deleteItemService.js";
import { handleErros } from "../../utils/errorHandler.js";

class DeleteManyItemController {
  async handle(req, res) {
    const { cartId } = req.body;

    try {
      if (!cartId) {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY);
      }
      if (typeof cartId !== "number") {
        throw new Error(ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_TYPE);
      }

      const service = new DeleteItemService();
      const result = await service.executeDeleteMany(cartId);

      return res.status(HTTP_STATUS_CODES.OK).json({
        message: SUCESS_MESSAGES_CART_ITEM.PRODUCT_DELETED_SUCCESSFULLY,
        product: result,
      });
    } catch (error) {
      console.log(error);
      const { status, message } = handleErros(error);
      res.status(status).json({ error: message });
    }
  }
}

export { DeleteManyItemController };
