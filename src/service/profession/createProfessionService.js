import { ERROR_MESSAGES_PROFISSION } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";


class CreateProfessionService {
    async execute(description) {
        try {
            const newProfission = await prismaClient.profession.create({
                data: {
                    description: description
                }
            });
            return newProfission
        } catch (error) {
            throw new Error(ERROR_MESSAGES_PROFISSION.DATABASE_CREATE_ERROR);
        }
    }
}

export { CreateProfessionService } 