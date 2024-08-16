import { ERROR_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class CreateUserService {
    async execute(name, email, accessLevel, password, professionId) {
        try {
            const newUser = await prismaClient.user.create({
                data: {
                    name,
                    email,
                    accessLevel,
                    password,
                    professionId,
                },
            });
            return newUser
        } catch (error) {
            // Tratamento de erro caso algo dê errado com o Prisma
            throw new Error(ERROR_MESSAGES_USER.DATABASE_ERROR);
        }
    }
}

export { CreateUserService }

