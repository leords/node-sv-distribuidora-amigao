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
            throw error
        }
    }
}

export { CreateProfessionService } 