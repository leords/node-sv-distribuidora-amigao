import bcrypt from "bcryptjs";
import { ERROR_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import prismaClient from "../../prisma/index.js";

class CreateUserService {
  async execute(name, email, accessLevel, password, professionId) {
    try {
      const profession = await prismaClient.profession.findUnique({
        where: {
          id: professionId,
        },
      });

      if (!profession) {
        throw new Error(ERROR_MESSAGES_USER.INVALID_PROFESSION_NOT_FOUND);
      }

      const validateEmail = await prismaClient.user.findUnique({
        where: {
          email: email,
        },
      });

      if (validateEmail) {
        throw new Error(ERROR_MESSAGES_USER.VALIDATE_EMAIL);
      }

      const hashedPassword = await bcrypt.hash(password, 8)

      const newUser = await prismaClient.user.create({
        data: {
          name,
          email,
          accessLevel,
          password : hashedPassword,
          professionId,
        },
      });
      return newUser;
    } catch (error) {
      console.error(error);
      throw error; // Lança o erro para ser tratado pelo depurador do controlador
    }
  }
}

export { CreateUserService };
