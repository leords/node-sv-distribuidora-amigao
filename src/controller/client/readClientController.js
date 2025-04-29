import { ERROR_MESSAGES_CLIENT, ERROR_MESSAGES_LOAD, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js"
import { ReadClientService } from "../../service/client/readClientService.js"
import { handleErros } from "../../utils/errorHandler.js"

class ReadClientController {
    async handle(req, res) {
        const name = req.query.name ? req.query.name : undefined
        const city = req.query.city ? req.query.city : undefined
        const salesman = req.query.salesman ? req.query.salesman : undefined
        const serviceDay = req.query.serviceDay ? req.query.serviceDay : undefined
        const status = req.query.status ? Boolean(req.query.status) : undefined

        try {
            if(name !== undefined && typeof name !== 'string') {
                throw new Error(ERROR_MESSAGES_CLIENT.INVALID_NAME)
            }
            if(city !== undefined && typeof city !== 'string') {
                throw new Error(ERROR_MESSAGES_CLIENT.INVALID_CITY)
            }
            if(salesman !== undefined && typeof salesman !== 'string') {
                throw new Error(ERROR_MESSAGES_CLIENT.INVALID_SALESMAN)
            }
            if(serviceDay !== undefined && typeof serviceDay !== 'string') {
                throw new Error(ERROR_MESSAGES_CLIENT.INVALID_SERVICE_DAY)
            }

            if(status !== undefined && !['true', 'false'].includes(req.query.status)) {
                throw new Error(ERROR_MESSAGES_CLIENT.INVALID_STATUS)
            }
            // req.query.status === 'true' = esta comparando e o valor da comparação que seja TRUE ou FALSE já serve como resposta para if ternario
            const statusBoolean = status !== undefined ? req.query.status === 'true' : undefined

            const filters = {
                name: name,
                city: city,
                salesman: salesman,
                serviceDay: serviceDay,
                status: statusBoolean 
        };

            const service = new ReadClientService();
            const result = await service.execute(filters);

            if(!result || result.length === 0) {
                return res
                .status(HTTP_STATUS_CODES.NOT_FOUND)
                .json({message: 'Nenhum cliente encontrado'})
            }

            return res
            .status(HTTP_STATUS_CODES.OK)
            .json({result})

        } catch (error) {
            const { status, message } = handleErros(error);
            return res
            .status(status)
            .json({error: message})
        }
    }
}

export {ReadClientController}