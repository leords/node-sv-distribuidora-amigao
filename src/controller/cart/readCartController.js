import { ERROR_MESSAGES_CART, ERROR_MESSAGES_CART_ITEM, ERROR_MESSAGES_CLIENT, ERROR_MESSAGES_USER, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js";
import { ReadCartService } from "../../service/cart/readCartService.js";
import { handleErros } from "../../utils/errorHandler.js";


class ReadCartController {
    async handle(req, res) {
        const id = req.query.id ? Number(req.query.id) : undefined;
        const clientId = req.query.clientId || undefined;
        const createdFrom = req.query.createdFrom ? new Date(req.query.createdFrom) : undefined;
        const createdUntil = req.query.createdUntil ? new Date(req.query.createdUntil) : undefined;
        const userId = req.query.userId ? Number(req.query.userId) : undefined;
        const paymentId = req.query.paymentId ? Number(req.query.paymentId) : undefined;

        try {
            if(id && isNaN(id)) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_ID);
            }
            if(clientId !== undefined && typeof clientId !== 'string') {
                throw new Error(ERROR_MESSAGES_CLIENT.INVALID_ID);
            }
            if(userId && isNaN(userId)) {
                throw new Error(ERROR_MESSAGES_USER.INVALID_TYPE_ID);
            }
            // getTime() = converte a data número de milissegundos. isNaN() = verifica se é um número válido.
            if(createdFrom && isNaN(createdFrom.getTime())) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_DATE);
            }
            if(createdUntil && isNaN(createdUntil.getTime())) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_DATE);
            }
            if(createdUntil && createdFrom && createdUntil < createdFrom) {
                throw new Error(ERROR_MESSAGES_CART.DATA_RANGE_ERROR);
            }
            if(paymentId && isNaN(paymentId)) {
                throw new Error(ERROR_MESSAGES_CART.INVALID_PAYMENT_ID_TO_CART);
            }

            const filters = {
                id: id,
                clientId: clientId,
                createdFrom: createdFrom,
                createdUntil: createdUntil,
                userId: userId,
                paymentId: paymentId
            }

            const service = new ReadCartService();
            const result = await service.execute(filters);

            return res.status(HTTP_STATUS_CODES.OK).json({result});


        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message});
        }
    }
}


export { ReadCartController }