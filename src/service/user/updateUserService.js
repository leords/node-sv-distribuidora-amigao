import { ERROR_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js"

class UpdateUserService {

    async execute(id, updateData) {
        try {
            const updateUser = await prismaClient.user.update({
                where: {
                    id: id
                },
                data: updateData
            });
            return updateUser;
        } catch (error) {
            throw new Error(ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR);
        }
    }


    // método para atualizar o acessLevel de usuário.
    async executeUpdateAcessLevel(id, accessLevel) {
       return this.execute(id, {accessLevel});
    }

    // método para atualizar o professionID de usuário.
    async executeUpdateProfessionId(id, professionId) {
        return this.execute(id, {professionId});  
        
        // {professionId} Cria um objeto literal. - Usa o nome da variável professionId como chave do objeto. - Usa o valor da variável professionId como valor correspondente dessa chave. 
    }
}

export { UpdateUserService }