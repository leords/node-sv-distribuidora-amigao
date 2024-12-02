import { ERROR_MESSAGES_LOAD } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class DeleteLoadService {
  async execute(id) {
    try {
      //buscando load por id
      const validatingLoad = await prismaClient.load.findUnique({
        where: {
          id: id,
        },
      });
      //validando a busca do load
      if (!validatingLoad) {
        throw new Error(ERROR_MESSAGES_LOAD.LOAD_NOT_FOUND);
      }

      await prismaClient.load.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { DeleteLoadService };
