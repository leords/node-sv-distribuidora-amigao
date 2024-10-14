import { ERROR_MESSAGES_PROFISSION } from "../config/httpStatusCodes.js";

class Profession {
    constructor(description) {
        this.description = description;
        //verifica se a descrição é nula ou indefinida.
        if(!description) {
            throw new Error(ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_EMPTY);
        }

        const validationError = this.validate();

        if(validationError) {
            throw new Error(validationError);
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

export default Profession
