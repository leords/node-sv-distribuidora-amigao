import { ERROR_MESSAGES_PAYMENT_METHOD, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js"
import { ReadPaymentMethodService } from "../../service/paymentMethod/readPaymentMethodService.js";

import { handleErros } from "../../utils/errorHandler.js";

class ReadPaymentMethodController {
    async handle(req, res) {
        const id = req.query.id ? Number(req.query.id) : undefined

        try {
            if(id && isNaN(id)) {
                throw new Error(ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID)
            }

            const service = new ReadPaymentMethodService()
            const result = await service.execute(id);

            return res.status(HTTP_STATUS_CODES.OK).json({result});
        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message});
        }
    }
}

export {ReadPaymentMethodController}
