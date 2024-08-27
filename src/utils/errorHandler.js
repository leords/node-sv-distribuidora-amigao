import { HTTP_STATUS_CODES, ERROR_MESSAGES_USER, ERROR_MESSAGES_PROFISSION } from "../config/httpStatusCodes.js";


function handleErros(error) {



    //INVALID_TYPE_STATUS: 'Status deve ser do tipo boleano, false ou true', //dar entrada no errorHandle  ??
    //INVALID_TYPE_PROFESSION: 'Profissão deve ser no tipo texto', //dar entrada no errorHandle  ??



    // message of the errors for user model!
    if (error.message === ERROR_MESSAGES_USER.INVALID_EMAIL) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_EMAIL,
        };
    } else if (error.message === ERROR_MESSAGES_USER.SHORT_PASSWORD) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.SHORT_PASSWORD,
        };
    } 
    else if (error.message === ERROR_MESSAGES_USER.INVALID_PROFESSION_NOT_EXIST) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_PROFESSION_NOT_EXIST
        }
    }
    else if (error.message === ERROR_MESSAGES_USER.INVALID_TYPE_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_TYPE_ID
        }
    }
    else if (error.message === ERROR_MESSAGES_USER.INVALID_TYPE_ACCESSLEVEL) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_TYPE_ACCESSLEVEL
        }
    }
    else if (error.message === ERROR_MESSAGES_USER.DATABASE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR , message: ERROR_MESSAGES_USER.DATABASE_ERROR,
        };
    }
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
    else if (error.message === ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR
        }
    }
    else if (error.message === ERROR_MESSAGES_USER.INVALID_USER) {
        return {
            status: HTTP_STATUS_CODES.NOT_FOUND, message: ERROR_MESSAGES_USER.INVALID_USER
        }
    }




    // message of the erros for profession model!
    else if (error.message === ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_ISNUMBER) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_DESCRIPTION_ISNUMBER
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_CHARACTER) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST , message: ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_CHARACTER 
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_EMPTY) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_EMPTY 
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID 
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.INVALID_TYPE_DESCRIPTION) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PROFISSION.INVALID_TYPE_DESCRIPTION 
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PROFISSION.INVALID_ID_EMPTY
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.DESCRIPTION_NOT_FOUND) {
        return {
            status: HTTP_STATUS_CODES.NOT_FOUND, message: ERROR_MESSAGES_PROFISSION.DESCRIPTION_NOT_FOUND
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message: ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.DATABASE_CREATE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message: ERROR_MESSAGES_PROFISSION.DATABASE_CREATE_ERROR
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR_USER_RELATIONS) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message: ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR_USER_RELATIONS
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.DATABASE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message: ERROR_MESSAGES_PROFISSION.DATABASE_ERROR
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.DATABASE_PROFESSION_EMPTY) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message: ERROR_MESSAGES_PROFISSION.DATABASE_PROFESSION_EMPTY
        }
    }
    else if (error.message === ERROR_MESSAGES_PROFISSION.PROFISSION_CREATED) {
        return {
            status: HTTP_STATUS_CODES.CREATED, message: SUCESS_MESSAGES_PROFISSION.PROFISSION_CREATED
        }
    }


    
    return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: 'Erro desconhecido ocorreu.',
    };
}



export { handleErros }