import { ERROR_MESSAGES_PAYMENT, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js";
import { CalculatePaymentService } from "../../service/payment/calculatePaymentService.js";
import { handleErros } from "../../utils/errorHandler.js"

class CalculatePaymentController {
    async handle(req, res) {
        const { clientId } = req.body

        try {
            if (!clientId) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID)
            }
            if(typeof clientId !== 'string') {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID_TYPE)
            }

            const service = new CalculatePaymentService();
            const result = await service.execute(clientId);

            return res.status(HTTP_STATUS_CODES.OK).json({result})

        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message})
        }
    }
}

export { CalculatePaymentController }