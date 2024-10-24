import { ERROR_MESSAGES_PAYMENT, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js";
import { ReadPaymentService } from "../../service/payment/readPaymentService.js";
import { handleErros } from "../../utils/errorHandler.js";

class ReadPaymentController {
    async handle(req, res) {
        const id = req.query.id ? Number(req.query.id) : undefined;
        const userId = req.query.userId ? Number(req.query.userId) : undefined
        const createdFrom = req.query.createdFrom ? new Date(req.query.createdFrom) : undefined
        const createdUntil = req.query.createdUntil ? new Date(req.query.createdUntil) : undefined
        const payment = req.query.payment ? Number(req.query.payment) : undefined
        const clientId = req.query.clientId ? req.query.clientId : undefined
        try {
            // verificação do ID é necessaria, pois mesmo undefined o isNaN retorna false! 
            if (id && isNaN(id)) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_ID_TYPE)
            }
            if (userId && isNaN(userId)) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_USER_ID)
            }
            if (createdFrom && isNaN(createdFrom.getTime())) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_DATE)
            }
            if (createdUntil && isNaN(createdUntil.getTime())) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_DATE)
            }
            if (createdUntil && createdFrom && createdUntil < createdFrom ) {
                throw new Error(ERROR_MESSAGES_PAYMENT.DATA_RANGE_ERROR)
            }
            if (payment && isNaN(payment)) {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID)
            }
            if (clientId !== undefined && typeof clientId !== 'string') {
                throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_USER_ID)
            }

            const service = new ReadPaymentService();

            const filters = {
                id: id,
                userId: userId,
                createdFrom: createdFrom, 
                createdUntil: createdUntil,
                payment: payment,
                clientId: clientId
            }

            const result = await service.execute(filters)
            return res.status(HTTP_STATUS_CODES.OK).json({result})
            
        } catch (error) {
            console.log(error)
            const { status, message } = handleErros(error)
            return res.status(status).json({error: message})
        }
    }
}

export { ReadPaymentController }