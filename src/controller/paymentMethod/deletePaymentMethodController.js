import { ERROR_MESSAGES_PAYMENT, HTTP_STATUS_CODES, SUCESS_MESSAGE_PAYMENT_METHOD } from "../../config/httpStatusCodes";
import { DeletePaymentmethodService } from "../../service/paymentMethod/deletePaymentMethodService.js";
import { handleErros } from "../../utils/errorHandler.js";


class DeletePaymentMethodController {

    async handle(req, res) {
        const { id } = req.body;
        
        try {
            if(!id || id == null) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_ID_EMPTY)
            }
            if(typeof id !== 'number') {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_ID)
            }
    
            const service = new DeletePaymentmethodService();
            const result = await service.execute(id);
    
    
            return res.status(HTTP_STATUS_CODES.OK).json({ message: SUCESS_MESSAGE_PAYMENT_METHOD.PAYMENT_DELETED_SUCCESSFULLY });

        } catch (error) {
            const { status, message } = handleErros(error);
            res.status(status).json({error: message})
        }
    }
}

export { DeletePaymentMethodController }