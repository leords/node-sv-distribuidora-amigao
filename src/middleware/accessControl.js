import { ERROR_MESSAGE_AUTH, HTTP_STATUS_CODES } from "../config/httpStatusCodes.js";

//accessControl recebe um array por parametro
const accessControl = (allowedLevels) => {
    return (req, res, next) => {

        const user = req.user
        
        //verifica se o accessControl do usuário esta incluso na lista que é passada por paramêtro.
        if(!user || !allowedLevels.includes(user.accessLevel)) {
            return res.status(HTTP_STATUS_CODES.FORBIDDEN).json({ error: ERROR_MESSAGE_AUTH.ACCESS_DENIED });
        }
        //se tudo estiver ok é dado continuidade no processo
        next();
    }
}

export { accessControl }