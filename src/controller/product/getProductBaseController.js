import { ERROR_MESSAGES_CLIENT, ERROR_MESSAGES_PRODUCT, SUCESS_MESSAGES_CLIENT, SUCESS_MESSAGES_PRODUCT } from "../../config/httpStatusCodes.js";
import { GetProductBaseService } from "../../service/product/getProductBaseService.js";
import { handleErros } from "../../utils/errorHandler.js";

class GetProductBaseController {
    async handle( req, res ) {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbw8aGUzKFs_p-qH_cSKoLiAZYEgsst34MjHJwYJW2kpUVDBs_WRyMtAQTrUcLCwipg/exec')
            const data = await response.json();

            console.log(data.saida)

            if(!response.ok) {
                throw new Error(`ERROR_MESSAGES_CLIENT.HTTP_STATUS_CODE_ERROR_FATCH ${response.status}`);
            }

            if(!data || !data.saida) {
                throw new Error(ERROR_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_ERROR);
            }

            const service = new GetProductBaseService();
            await service.execute(data.saida);
            throw new Error(SUCESS_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_SUCESS);


        } catch (error) {
            const { status, message } = handleErros(error);
            return res.status(status).json({message});
        }
    }
}


export { GetProductBaseController }