import { ERROR_MESSAGES_PAYMENT_METHOD, HTTP_STATUS_CODES, SUCESS_MESSAGE_PAYMENT_METHOD } from "../../config/httpStatusCodes.js";
import { CreatePaymentMethodService } from "../../service/paymentMethod/createPaymentMethodService.js";
import { handleErros } from "../../utils/errorHandler.js"
import { PaymentMethod } from "../../models/paymentMethod.js";


class CreatePaymentMethodController {
    async handle(req, res) {
        const { name } = req.body;
        try {
            if(!name) {
                throw new Error(ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME_EMPTY);
            }
            if(typeof name !== 'string') {
                throw new Error(ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME);
            }

            const newPayment = new PaymentMethod(name);
            const service = new CreatePaymentMethodService();
            const result = await service.execute(newPayment.name);
    
            return res.status(HTTP_STATUS_CODES.CREATED).json({
                message: SUCESS_MESSAGE_PAYMENT_METHOD.PAYMENT_CREATED_SUCCESSFULLY ,
                payment: result
            });

        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({message});
        }
    }
}

export { CreatePaymentMethodController }