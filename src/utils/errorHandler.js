import { HttpStatusCode } from "axios";
import { HTTP_STATUS_CODES, ERROR_MESSAGES_USER, ERROR_MESSAGES_PROFISSION, ERROR_MESSAGES_PRODUCT, SUCESS_MESSAGES_PRODUCT, HTTP_API, ERROR_MESSAGES_CLIENT, ERROR_MESSAGES_CART, ERROR_MESSAGES_CART_ITEM, ERROR_MESSAGES_PAYMENT_METHOD, ERROR_MESSAGES_PAYMENT } from "../config/httpStatusCodes.js";


function handleErros(error) {

    // message of the errors for user model!
    if(error.message === ERROR_MESSAGES_USER.INVALID_PROFESSION_ID_TYPE) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_PROFESSION_ID_TYPE
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_PROFESSION_ID) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_PROFESSION_ID
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_PASSWORD_SHORT) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_PASSWORD_SHORT
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_PASSWORD_TYPE) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_PASSWORD_TYPE
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_PASSWORD) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_PASSWORD
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_ACCESS_OPTION) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_ACCESS_OPTION
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL_TYPE) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL_TYPE
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_EMAIL_FORMAT) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_EMAIL_FORMAT
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_EMAIL_TYPE) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_EMAIL_TYPE
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_EMAIL) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_EMAIL
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_NAME_LENGTH) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_NAME_LENGTH
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_NAME_TYPE) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_NAME_TYPE
        }
    }
    if(error.message === ERROR_MESSAGES_USER.INVALID_NAME) {
        return {
            status:HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_NAME
        }
    }
    if (error.message === ERROR_MESSAGES_USER.INVALID_EMAIL) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_EMAIL,
        };
    } 
    else if (error.message === ERROR_MESSAGES_USER.INVALID_PASSWORD_SHORT) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.SHORT_PASSWORD,
        };
    } 
    else if (error.message === ERROR_MESSAGES_USER.INVALID_TYPE_STATUS) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_TYPE_STATUS 
        }
    } 
    else if (error.message === ERROR_MESSAGES_USER.INVALID_TYPE_PROFESSION) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_TYPE_PROFESSION
        }
    }
    else if (error.message === ERROR_MESSAGES_USER.INVALID_PROFESSION_NOT_FOUND) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_PROFESSION_NOT_FOUND
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
    else if(error.message === ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY
        }
    }
    else if (error.message === ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR
        }
    }
    else if (error.message === ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND) {
        return {
            status: HTTP_STATUS_CODES.NOT_FOUND, message: ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND
        }
    }
    else if(error.message === ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL
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


    // message of the erros for product model!
    else if (error.message === ERROR_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_ERROR) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message: ERROR_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_ERROR
        }
    }
    else if (error.message === SUCESS_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_SUCESS) {
        return {
            status: HTTP_STATUS_CODES.OK, message: SUCESS_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_SUCESS
        }
    }

    else if (error.message === HTTP_API.HTTP_STATUS_CODE_ERROR_FATCH) {
        return {
            status: HTTP_STATUS_CODES.NOT_FOUND, message: HTTP_API.HTTP_STATUS_CODE_ERROR_FATCH
        }
    }


    
    // message of the errors for client model!
    else if (error.message === ERROR_MESSAGES_CLIENT.SYNCHRONIZE_CLIENT_ERROR) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message: ERROR_MESSAGES_CLIENT.SYNCHRONIZE_CLIENT_ERROR
        }
    }
    else if (error.message === ERROR_MESSAGES_CLIENT.HTTP_STATUS_CODE_ERROR_FATCH) {
        return {
            status: HTTP_STATUS_CODES.NOT_FOUND, message: HTTP_STATUS_CODE_ERROR_FATCH
        }
    }
    else if(error.message === ERROR_MESSAGES_CLIENT.INVALID_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CLIENT.INVALID_ID
        }
    }




    // message of the errors for item model!
    else if (error.message === ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND
        }
    }
    else if (error.message === ERROR_MESSAGES_CART_ITEM.PRODUCT_ERROR_ADD_TO_CART) {
        return {
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message: ERROR_MESSAGES_CART_ITEM.PRODUCT_ERROR_ADD_TO_CART
        }
    }
    else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_TYPE_QUANTITY) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART_ITEM.INVALID_TYPE_QUANTITY
        }
    }
    else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_PRODUCT_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART_ITEM.INVALID_PRODUCT_ID
        }
    }
    else if(error.message === ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY
        }
    }
    else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_ID_EMPTY) {
        return {
            statusbar: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART_ITEM.INVALID_ID_EMPTY
        }
    }
    else if(error.message === ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY
        }
    }
    else if(error.message === ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_TYPE) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_TYPE
        }
    }

    // INVALID_CART_ID
    
    // message of the errors for cart model!
    else if (error.message === ERROR_MESSAGES_CART.CART_NOT_FOUND) {
        return {
            status: HTTP_STATUS_CODES.NOT_FOUND, message: ERROR_MESSAGES_CART.CART_NOT_FOUND
        }
    }
    else if (error.message === ERROR_MESSAGES_CART.INVALID_CLIENT_ID_TO_CART) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART.INVALID_CLIENT_ID_TO_CART
        }
    }
    else if (error.message === ERROR_MESSAGES_CART.INVALID_USER_ID_TO_CART) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART.INVALID_USER_ID_TO_CART
        }
    }
    else if (error.message === ERROR_MESSAGES_CART.INVALID_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART.INVALID_ID
        }
    }
    else if (error.message === ERROR_MESSAGES_CART.INVALID_ID_EMPTY) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART.INVALID_ID_EMPTY
        }
    }
    else if(error.message === ERROR_MESSAGES_CART.INVALID_DATE) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART.INVALID_DATE
        }
    }
    else if(error.message === ERROR_MESSAGES_CART.DATA_RANGE_ERROR) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART.DATA_RANGE_ERROR
        }
    }
    else if(error.message === ERROR_MESSAGES_CART.INVALID_PAYMENT_ID_TO_CART) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_CART.INVALID_PAYMENT_ID_TO_CART
        }
    }


    // message of the errors for payment method model!    
    else if(error.message === ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST , message: ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME_EMPTY) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST , message: ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME_EMPTY
        }
    }

    else if(error.message === ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID_EMPTY) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID_EMPTY
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT_METHOD.PAYMENT_NOT_FOUND) { 
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT_METHOD.PAYMENT_NOT_FOUND
        }
    }

    // message of the errors for payment model!
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_USER_ID_TYPE) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_USER_ID_TYPE
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_USER_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_USER_ID
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID_TYPE) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID_TYPE
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_VALUE_AMOUNT) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_VALUE_AMOUNT
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_VALUE_TYPE) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_VALUE_TYPE
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_VALUE) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_VALUE
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID_TYPE) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID_TYPE
        }
    }

    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_ID) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_ID
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.INVALID_ID_TYPE) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.INVALID_ID_TYPE
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.PAYMENT_NOT_FOUND) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.PAYMENT_NOT_FOUND
        }
    }
    else if(error.message === ERROR_MESSAGES_PAYMENT.NO_PENDING) {
        return {
            status: HTTP_STATUS_CODES.BAD_REQUEST, message: ERROR_MESSAGES_PAYMENT.NO_PENDING
        }
    }
    
    return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: 'Erro desconhecido ocorreu.',
    };
}



export { handleErros }