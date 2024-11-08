import { ERROR_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class UpdateUserService {
  async execute(id, updateData) {
    try {
      const userExisting = await prismaClient.user.findUnique({
        where: {
          id: id,
        },
      });
      if (!userExisting) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND);
      }

      const updateUser = await prismaClient.user.update({
        where: {
          id: id,
        },
        data: updateData,
      });
      return updateUser;
    } catch (error) {
      throw error;
    }
  }

  // método para atualizar o acessLevel de usuário.
  async executeUpdateAcessLevel(id, accessLevel) {
    return this.execute(id, { accessLevel });
  }

  // método para atualizar o professionID de usuário.
  async executeUpdateProfessionId(id, professionId) {
    return this.execute(id, { professionId });

    // {professionId} Cria um objeto literal. - Usa o nome da variável professionId como chave do objeto. - Usa o valor da variável professionId como valor correspondente dessa chave.
  }

  async executeUpdateStatus(id) {
    try {
      const statusUser = await prismaClient.user.findUnique({
        where: {
          id: id,
        },
      });

      if (!statusUser) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND);
      }

      if (typeof statusUser.status === "boolean") {
        const update = await prismaClient.user.update({
          where: {
            id: id,
          },
          data: {
            status: !statusUser.status,
          },
        });

        return update;
      }

      throw new Error(ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY);
    } catch (error) {
      throw error;
    }
  }
}

export { UpdateUserService };
