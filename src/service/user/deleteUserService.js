import { ERROR_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class DeleteUserService {

    async execute(id) {
        try {
            const deleteUser = await prismaClient.user.delete({
                where: {
                    id: id,
                },
            });

            return deleteUser
            
        } catch (error) {
            throw new Error(ERROR_MESSAGES_USER.DATABASE_DELETE_ERROR);
        }
    }

}

export { DeleteUserService } 