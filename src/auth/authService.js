import prismaClient from "../prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGE_AUTH } from "../config/httpStatusCodes.js";

class AuthService {
    async login(email, password) {

        // procura o usuário no banco de dados
        const user = await prismaClient.user.findUnique({
            where: { email },
        });

        if(!user || !user.status) {
            throw new Error(ERROR_MESSAGE_AUTH.INVALID_CREDENTIALS);
        }
        // verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error(ERROR_MESSAGE_AUTH.INVALID_CREDENTIALS);
        }

        const token = jwt.sign (
            {
                id: user.id,
                accessLevel: user.accessLevel,
                email: user.email,
            }, 
            process.env.JWT_SECRET, 
            { expiresIn: "8h" }
        );

        return { 
            token,
            user: {
                name: user.name
            }  
        };
    }
}

export { AuthService }; 