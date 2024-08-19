import { HTTP_STATUS_CODES, ERROR_MESSAGES_USER } from "../config/httpStatusCodes.js";


function handleErros(error) {

    // message of the errors for user model!

    //create
    if (error.message === ERROR_MESSAGES_USER.INVALID_EMAIL) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_EMAIL,
        };

    } else if (error.message === ERROR_MESSAGES_USER.SHORT_PASSWORD) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.SHORT_PASSWORD,
        };

    } else if (error.message === ERROR_MESSAGES_USER.DATABASE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR , message: ERROR_MESSAGES_USER.DATABASE_ERROR,
        };
    }

    //delete
    else if (error.message === ERROR_MESSAGES_USER.DATABASE_DELETE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR , message: ERROR_MESSAGES_USER.DATABASE_DELETE_ERROR
        }
    } 
    else if(error.message === ERROR_MESSAGES_USER.ERROR_REQ) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.ERROR_REQ
        }
    }

    //update
    else if (error.message === ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR
        }
    }
    
    return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: 'Erro desconhecido ocorreu.',
    };
}



export { handleErros }