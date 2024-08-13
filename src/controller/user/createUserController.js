import { CreateUserService } from "../../service/user/createUserService.js";
import Usuario from "../../models/usuario.js";
import { HTTP_STATUS_CODES, SUCESS_MESSAGES_USER } from "../../config/httpStatusCodes.js";
import { handleErros } from "../../utils/errorHandler.js";

class CreateUserController {
    async handle(req, res) {
        const {name, email, accessLevel, password, professionId} = req.body;

        //valida os dados e retorna
        try {
            const usuarioModel = new Usuario(name, email, accessLevel, password, professionId);

            const service = new CreateUserService();

            const result = await service.execute(
                usuarioModel.name,
                usuarioModel.email, 
                usuarioModel.accessLevel, 
                usuarioModel.password, 
                usuarioModel.professionId
            );

            //retorno de usuário criado com sucesso!
            return res.status(201).json({
                message: SUCESS_MESSAGES_USER.USER_CREATED,
                user: result
            });
            
        } catch (error) {
            console.error('erro ao criar o usuário!', error.message);

            // Verifica o tipo de erro e retorna uma resposta específica.
            const { status, message } = handleErros(error);
            return res.status(status).json({error: message}); 


            // if (error.message === 'Email inválido') {
            //     return res.status(400).json({ error: 'Email fornecido é inválido' });
            // } else if (error.message === 'Sua senha deve conter ao menos 8 caracteres') {
            //     return res.status(400).json({ error: 'A senha deve conter ao menos 8 caracteres' });
            // } else if (error.message === 'Erro ao criar o usuário no banco de dados') {
            //     return res.status(500).json({ error: 'Erro ao criar o usuário no banco de dados' })
            // } else {
            //     return res.status(500).json({ error: 'Não foi possível criar o usuário. Verifique os dados fornecidos.' });
            // }
        }
    }
} 


export { CreateUserController }