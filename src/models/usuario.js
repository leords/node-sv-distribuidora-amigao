import { ERROR_MESSAGES_USER } from "../config/httpStatusCodes.js";

class Usuario {
    constructor(name, email, accessLevel, password, professionId) {
        this.name = name;
        this.email = email;
        this.accessLevel = accessLevel;
        this.password = password;
        this.professionId = professionId;

        // realiza a validação quando o objeto é criado
        const validationError = this.validate();

        if(validationError) {
            throw new Error(validationError);
        }
    }


    //valida o email
    static validateEmail(email) {
        const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email)
    }

    //valida a senha
    static validateSenha(password) {
        return password.length >= 8;
    }

    // método para validar os dados do usuário
    validate() {

            if(!Usuario.validateEmail(this.email)) { 
                return ERROR_MESSAGES_USER.INVALID_EMAIL;
            }
            if(!Usuario.validateSenha(this.password)) {
                return ERROR_MESSAGES_USER.SHORT_PASSWORD
            }
            
            return null;
    }
}


export default Usuario;