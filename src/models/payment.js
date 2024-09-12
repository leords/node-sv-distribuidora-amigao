import { ERROR_MESSAGES_PAYMENT } from "../config/httpStatusCodes";

class Payment {
    constructor(name) {
        this.name = name;

        const validatePaymentForm = this.validate(name);

        if(validatePaymentForm) {
            throw new Error(validatePaymentForm);
        }
    }

    //método para validar o tamanho da string
    static validateLength(name) {
        const maxLength = 50;
        return name.length <= maxLength;
    }
    //método para validar se a somente letras na variavel
    static validateOnlyLetters(name) {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name);
    }

    validate() {
        if(!Payment.validateLength(this.name)) {
            throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_LENGTH_NAME)
        }
        if(!Payment.validateOnlyLetters(this.name)){
            throw new Error(ERROR_MESSAGES_PAYMENT.INVALID_ONLY_LETTERS)
        }

        return null
    }


}

export {Payment}