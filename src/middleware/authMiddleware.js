import { ERROR_MESSAGE_AUTH, HTTP_STATUS_CODES } from "../config/httpStatusCodes.js";
import jwt from 'jsonwebtoken'


function authMiddleware(req, res, next) {
        const authHeader = req.headers.authorization;

        // verifica a existencia do Token
        if(!authHeader) {
            return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({message: ERROR_MESSAGE_AUTH.TOKEN_NOT_FOUND});
        }

        // remove a palavra "Bearer " por um espaço, removendo o bearer do inicio do token
        const token = authHeader.replace('Bearer ', '');
        console.log("Token recebido:", token);
        console.log("JWT_SECRET:", process.env.JWT_SECRET);

        try {
            //Tenta verificar (validar e decodificar) o token usando a chave secreta.
            // Se o token for válido, ele retorna os dados que foram "embedados" dentro do JWT.
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            console.log(decoded)
            
            // se tudo estiver OK, chama o NEXT() e a requisição continua para o controller da rota
            next();
        } catch (error) {
            console.log(error)
            // Se o token for inválido, expirado ou mal formado, cai no catch e retorna erro 401.
            return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({message: ERROR_MESSAGE_AUTH.TOKEN_INVALID})
        }
}

export { authMiddleware }