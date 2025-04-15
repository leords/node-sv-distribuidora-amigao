import { HTTP_STATUS_CODES } from "../config/httpStatusCodes.js";

//accessControl recebe um array por parametro
const accessControl = (allowedLevels) => {
    return (req, res, next) => {
        console.log('acessou o accessControl')
        const user = req.user
        console.log('Objeto:', user)
        console.log('Nível de acesso requerido:', allowedLevels)
        console.log('Nível de acesso:', user.accessLevel)
        //verifica se o accessControl do usuário esta incluso na lista que é passada por paramêtro.

        console.log(user.accessLevel)
        if(!user || !allowedLevels.includes(user.accessLevel)) {
            return res.status(HTTP_STATUS_CODES.FORBIDDEN).json({ error: 'Acesso negado' });
        }

        console.log('passou pelo accessControl')
        //se tudo estiver ok é dado continuidade no processo
        next();
    }
}

export { accessControl }