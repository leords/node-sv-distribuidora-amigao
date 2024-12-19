import {
  ERROR_MESSAGES_PRODUCT,
  SUCESS_MESSAGES_PRODUCT,
} from "../../config/httpStatusCodes.js";
import { GetClientBaseService } from "../../service/client/getClientBaseService.js";
import { handleErros } from "../../utils/errorHandler.js";

class GetClientBaseController {
  async handle(req, res) {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxJ4re9BSBYjhdFhn0q3kYTRYno188Gv7AqF86WkA_BaxsLYoU55CIZN1fKv_3k9rfG/exec"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          `ERROR_MESSAGES_PRODUCT.HTTP_STATUS_CODE_ERROR_FATCH ${response.status}`
        );
      }

      if (!data || !data.saida) {
        throw new Error(ERROR_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_ERROR);
      }

      const service = new GetClientBaseService();
      await service.execute(data.saida);
      throw new Error(SUCESS_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_SUCESS);
    } catch (error) {
      const { status, message } = handleErros(error);
      return res.status(status).json({ message });
    }
  }
}

export { GetClientBaseController };
