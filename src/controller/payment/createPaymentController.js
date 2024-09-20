import { ERROR_MESSAGES_PAYMENT, HTTP_STATUS_CODES, SUCESS_MESSAGE_PAYMENT } from "../../config/httpStatusCodes.js";
import { CreatePaymentService } from "../../service/payment/createPaymentService.js";
import { handleErros } from "../../utils/errorHandler.js"
import { Payment } from "../../models/payment.js";


class CreatePaymentController {
    async handle(req, res) {
        const { name } = req.body;
        try {
            if(!name) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_NAME_EMPTY);
            }
            if(typeof name !== 'string') {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_NAME);
            }

            const newPayment = new Payment(name);
            const service = new CreatePaymentService();
            const result = await service.execute(newPayment.name);
    
            return res.status(HTTP_STATUS_CODES.CREATED).json({
                message: SUCESS_MESSAGE_PAYMENT.PAYMENT_CREATED_SUCCESSFULLY ,
                payment: result
            });

        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({message});
        }
    }
}

export { CreatePaymentController }