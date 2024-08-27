import { ERROR_MESSAGES_PROFISSION } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";


class DeleteProfessionService {

    async execute(id) {
        try {
            // Verifica se a profissão está associada e inclui os usuários
            const profession = await prismaClient.profession.findUnique({
                where: { id: id },
                include: { users: true },
            });

            // Lança um erro se a profissão não for encontrada
            if (!profession) {
                throw new Error(ERROR_MESSAGES_PROFISSION.DESCRIPTION_NOT_FOUND);
            }

            // Lança um erro se houver usuários associados com essa profissão
            if(profession.users.length > 0) {
                throw new Error(ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR_USER_RELATIONS);
            }

            // Deleta a profissão caso não haja usuários associados
            const deleteProfession = await prismaClient.profession.delete({
                where: {
                    id: id,
                },
            });
            return deleteProfession;     

        } catch (error) {
            console.error(error);
            throw error // Lança o erro para ser tratado pelo depurador do controlador
        }
    }
}

export { DeleteProfessionService }