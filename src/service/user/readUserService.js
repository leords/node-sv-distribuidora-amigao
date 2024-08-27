import { ERROR_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class ReadUserService {
    // método para buscar usuário por filtros
    async executeAnyUsers(filters) {

        // Cria um objeto de condições de filtro
        const whereConditions  = {}

        // Valida e adiciona os filtros ao objeto de condições
        if (filters.status) {
            whereConditions.status = filters.status;
        }
        if (filters.profession) {
            whereConditions.profession = filters.profession;
        }
        if (filters.acessLevel) {
            whereConditions.accessLevel = filters.accessLevel;
        }

        // Busca os usuários no banco de dados com base nas condições de filtro
        try {
            const users = await prismaClient.user.findMany({
                where: whereConditions
            });

            return users;
        } catch (error) {
            // Lança o erro para ser tratado pelo controlador
            throw error
        }
    }


    // método para buscar usuário por ID
    async executeUniqueUser(id) {
        try {
            // buscando usuário com este ID no banco de dados
            const existingUser = prismaClient.user.findUnique({
                where: {
                    id: id
                }
            });
            // validando a existencia desse usuário com esse ID
            if(!existingUser) {
                throw new Error(ERROR_MESSAGES_USER.INVALID_USER);
            }

            return existingUser;
            
        } catch (error) {
            throw error
        }
    }
}

export { ReadUserService }