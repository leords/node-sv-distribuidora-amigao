import { ERROR_MESSAGES_PAYMENT, HTTP_STATUS_CODES, SUCESS_MESSAGES_PAYMENT } from "../../config/httpStatusCodes.js";
import { CreateCartService } from "../../service/cart/createCartService.js";
import { createPaymentService } from "../../service/payment/createPaymentService.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreatePaymentController {
    async handle(req, res) {
        const {value, clientId, paymentId, userId} = req.body;
        
        try {
            if (!value) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_VALUE)
            }
            if (isNaN(value)) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_VALUE_TYPE);
            }
            if (value <= 0) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_VALUE_AMOUNT);
            }
            if (!clientId) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID);
            }
            if (isNaN(clientId)) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID_TYPE);
            }
            if (!paymentId) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID);
            }
            if (isNaN(paymentId)) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID_TYPE);
            }
            if (!userId) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_USER_ID)
            }
            if (isNaN(userId)) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_USER_ID_TYPE)
            }

            const service = new createPaymentService();
            const result = await service.execute(value, clientId, paymentId, userId);

            return res.status(HTTP_STATUS_CODES.CREATED).json({
                message: SUCESS_MESSAGES_PAYMENT.PAYMENT_CREATED_SUCCESSFULLY,
                paymentMethod: result
            })

        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message});
        }

    }
}

export { CreatePaymentController }