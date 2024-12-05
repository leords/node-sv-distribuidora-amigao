import {
  ERROR_MESSAGES_CART,
  ERROR_MESSAGES_LOAD,
  SUCESS_MESSAGES_CART,
} from "../../config/httpStatusCodes";
import { InsertCartToLoadService } from "../../service/cart/InsertCartToLoadService";
import { handleErros } from "../../utils/errorHandler";

class InsertLoadToCartController {
  async handle(req, res) {
    const { idLoad, idCart } = req.body;

    try {
      if (!idLoad) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID);
      }
      if (isNaN(idLoad)) {
        throw new Error(ERROR_MESSAGES_LOAD.INVALID_ID_TYPE);
      }
      if (!idCart) {
        throw new Error(ERROR_MESSAGES_CART.INVALID_ID_EMPTY);
      }
      if (isNaN(idCart)) {
        throw new Error(ERROR_MESSAGES_CART.INVALID_ID);
      }

      const service = new InsertCartToLoadService();
      const result = await service.execute(idLoad, idCart);

      return res
        .status(SUCESS_MESSAGES_CART.CART_UPDATED_SUCCESSFULLY)
        .json({ result });
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ error: message });
    }
  }
}

export { InsertLoadToCartController };
