import { ERROR_MESSAGES_PRODUCT, HTTP_STATUS_CODES } from "../../config/httpStatusCodes.js"
import { ReadProductService } from "../../service/product/readProductService.js"
import { handleErros } from "../../utils/errorHandler.js"

class ReadProductController
 {
    async handle(req, res) {
        const segment = req.query.segment ? req.query.segment : undefined
        const supplier = req.query.supplier ? req.query.supplier : undefined
        const status = req.query.status ? Boolean(req.query.status) : undefined
        const name = req.query.name ? req.query.name : undefined
        try {

            if(segment !== undefined && typeof segment !== "string") {
                throw new Error(ERROR_MESSAGES_PRODUCT.INVALID_SEGMENT_TYPE)
            }
            if(supplier !== undefined && typeof supplier !== "string") {
                throw new Error(ERROR_MESSAGES_PRODUCT.INVALID_SUPPLIER_TYPE)
            }
            if(status !== undefined && typeof status !== "boolean") {
                throw new Error(ERROR_MESSAGES_PRODUCT.INVALID_STATUS_TYPE)
            }
            if(name !== undefined && typeof name !== "string") {
                throw new Error("Nome deve ser um texto.")
            }

            const service = new ReadProductService();

            const filters = {
                segment: segment,
                supplier: supplier,
                status: status,
                name: name
            };

            const result = await service.execute(filters);

            if(!result || result.length === 0) {
                return res
                    .status(HTTP_STATUS_CODES.NOT_FOUND)
                    .json({ message: 'Nenhum produto encontrado' })
            }

            return res
                .status(HTTP_STATUS_CODES.OK)
                .json({result})
            
        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message})
        }
    }
}

export { ReadProductController } 