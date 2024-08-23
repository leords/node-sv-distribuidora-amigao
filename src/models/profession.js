import { ERROR_MESSAGES_PROFISSION } from "../config/httpStatusCodes.js";
// Importa as mensagens de erro personalizadas, centralizando-as em um arquivo de configuração.

class Profession {
    constructor(description) {
        this.description = description;
        //verifica se a descrição é nula ou indefinida.
        if(!description) {
            throw new Error(ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_EMPTY);
        }

        const validateDescription = this.validate(description);

        if(validateDescription) {
            throw new Error(validateDescription);
        }
    }

    // método estático que valida se a descrição tem até 50 caracteres.
    static validateLength(description) {
        const maxLength = 50;
        return description.length <= maxLength;
    }

    // método estático que valida se a descrição tem apenas letras e espaço.
    static validateOnlyLetters(description) {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(description);
    }

    // método que executa as verificações e retorna mensagens de erro caso falhe.
    validate() {
        if(!Profession.validateLength(this.description) ) {
            return ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_CHARACTER;
        }
        if(!Profession.validateOnlyLetters(this.description)) {
            return ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_ISNUMBER;
        }

        return null; 
    }

}

export { Profession }
