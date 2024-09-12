import { ERROR_MESSAGES_PROFISSION } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"


class ReadProfessionService {

    async executeReadAllProfession() {
        try {
            const profession = await prismaClient.profession.findMany();
            return profession;

        } catch (error) {
            throw error
        }
    }

    async executeReadUniqueProfession(id) {
        try {
            const profession = await prismaClient.profession.findUnique({
                where: {
                    id: id
                }
            });
            return profession
        } catch (error) {
            throw error
        }
    }
}

export { ReadProfessionService }