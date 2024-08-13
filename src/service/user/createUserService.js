import prismaClient from "../../prisma/index.js";

class CreateUserService {
    async execute(name, email, accessLevel, password, professionId) {
        try {
            const newUser = prismaClient.user.create({
                data: {
                    name,
                    email,
                    accessLevel,
                    password,
                    professionId,
                },
            });
            return newUser
        } catch (error) {
            // Tratamento de erro caso algo dê errado com o Prisma
            throw new Error('Erro ao criar o usuário no banco de dados');
        }
    }
}

export { CreateUserService }

