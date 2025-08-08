import {
  HTTP_STATUS_CODES,
  ERROR_MESSAGES_USER,
  ERROR_MESSAGES_PROFISSION,
  ERROR_MESSAGES_PRODUCT,
  SUCESS_MESSAGES_PRODUCT,
  HTTP_API,
  ERROR_MESSAGES_CLIENT,
  ERROR_MESSAGES_CART,
  ERROR_MESSAGES_CART_ITEM,
  ERROR_MESSAGES_PAYMENT_METHOD,
  ERROR_MESSAGES_PAYMENT,
  ERROR_MESSAGES_VEHICLE,
  ERROR_MESSAGES_LOAD,
  ERROR_MESSAGE_AUTH,
  ERROR_MESSAGES_TRANSACTION,
} from "../config/httpStatusCodes.js";

function handleErros(error) {
  // message of the errors for auth model!
  console.log("Erro dentro do handle:", error.message);
  if (error.message === ERROR_MESSAGE_AUTH.INVALID_CREDENTIALS) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGE_AUTH.INVALID_CREDENTIALS,
    };
  }

  // message of the errors for user model!
  else if (error.message === ERROR_MESSAGES_USER.INVALID_PROFESSION_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_PROFESSION_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_PROFESSION_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_PROFESSION_ID,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_PASSWORD_SHORT) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_PASSWORD_SHORT,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_PASSWORD_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_PASSWORD_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_PASSWORD) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_PASSWORD,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_ACCESS_OPTION) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_ACCESS_OPTION,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_EMAIL_FORMAT) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_EMAIL_FORMAT,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_EMAIL_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_EMAIL_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_EMAIL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_EMAIL,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_NAME_LENGTH) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_NAME_LENGTH,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_NAME_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_NAME_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_NAME) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_NAME,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_EMAIL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_EMAIL,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_PASSWORD_SHORT) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.SHORT_PASSWORD,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_TYPE_STATUS) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_TYPE_STATUS,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_TYPE_PROFESSION) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_TYPE_PROFESSION,
    };
  } else if (
    error.message === ERROR_MESSAGES_USER.INVALID_PROFESSION_NOT_FOUND
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_PROFESSION_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_TYPE_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_TYPE_ID,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_TYPE_ACCESSLEVEL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_TYPE_ACCESSLEVEL,
    };
  } else if (error.message === ERROR_MESSAGES_USER.DATABASE_ERROR) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_USER.DATABASE_ERROR,
    };
  } else if (error.message === ERROR_MESSAGES_USER.DATABASE_DELETE_ERROR) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_USER.DATABASE_DELETE_ERROR,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_ID_USER_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.DATABASE_UPDATE_ERROR,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_USER.INVALID_USER_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_ACCESS_LEVEL,
    };
  } else if (error.message === ERROR_MESSAGES_USER.VALIDATE_EMAIL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.VALIDATE_EMAIL,
    };
  } else if (error.message === ERROR_MESSAGES_USER.CLIENT_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.CLIENT_NOT_FOUND,
    };
  }

  // message of the erros for profession model!
  else if (
    error.message === ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_ISNUMBER
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_USER.INVALID_DESCRIPTION_ISNUMBER,
    };
  } else if (
    error.message === ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_CHARACTER
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_CHARACTER,
    };
  } else if (
    error.message === ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_EMPTY
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PROFISSION.INVALID_DESCRIPTION_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID,
    };
  } else if (
    error.message === ERROR_MESSAGES_PROFISSION.INVALID_TYPE_DESCRIPTION
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PROFISSION.INVALID_TYPE_DESCRIPTION,
    };
  } else if (error.message === ERROR_MESSAGES_PROFISSION.INVALID_TYPE_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PROFISSION.INVALID_ID_EMPTY,
    };
  } else if (
    error.message === ERROR_MESSAGES_PROFISSION.DESCRIPTION_NOT_FOUND
  ) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_PROFISSION.DESCRIPTION_NOT_FOUND,
    };
  } else if (
    error.message === ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR
  ) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR,
    };
  } else if (
    error.message === ERROR_MESSAGES_PROFISSION.DATABASE_CREATE_ERROR
  ) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_PROFISSION.DATABASE_CREATE_ERROR,
    };
  } else if (
    error.message ===
    ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR_USER_RELATIONS
  ) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_PROFISSION.DATABASE_DELETE_ERROR_USER_RELATIONS,
    };
  } else if (error.message === ERROR_MESSAGES_PROFISSION.DATABASE_ERROR) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_PROFISSION.DATABASE_ERROR,
    };
  } else if (
    error.message === ERROR_MESSAGES_PROFISSION.DATABASE_PROFESSION_EMPTY
  ) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_PROFISSION.DATABASE_PROFESSION_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_PROFISSION.PROFISSION_CREATED) {
    return {
      status: HTTP_STATUS_CODES.CREATED,
      message: SUCESS_MESSAGES_PROFISSION.PROFISSION_CREATED,
    };
  }

  // message of the erros for product model!
  else if (error.message === ERROR_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_ERROR) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_ERROR,
    };
  } else if (
    error.message === SUCESS_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_SUCESS
  ) {
    return {
      status: HTTP_STATUS_CODES.OK,
      message: SUCESS_MESSAGES_PRODUCT.SYNCHRONIZE_PRODUCT_SUCESS,
    };
  } else if (error.message === HTTP_API.HTTP_STATUS_CODE_ERROR_FATCH) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: HTTP_API.HTTP_STATUS_CODE_ERROR_FATCH,
    };
  } else if (error.message === ERROR_MESSAGES_PRODUCT.INVALID_SEGMENT_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PRODUCT.INVALID_SEGMENT_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_PRODUCT.INVALID_STATUS_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PRODUCT.INVALID_STATUS_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_PRODUCT.INVALID_SUPPLIER_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PRODUCT.INVALID_SUPPLIER_TYPE,
    };
  }

  // message of the errors for client model!
  //INVALID_CNPJ
  else if (error.message === ERROR_MESSAGES_CLIENT.INVALID_CNPJ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CLIENT.INVALID_CNPJ,
    };
  } else if (error.message === ERROR_MESSAGES_CLIENT.SYNCHRONIZE_CLIENT_ERROR) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_CLIENT.SYNCHRONIZE_CLIENT_ERROR,
    };
  } else if (
    error.message === ERROR_MESSAGES_CLIENT.HTTP_STATUS_CODE_ERROR_FATCH
  ) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: HTTP_STATUS_CODE_ERROR_FATCH,
    };
  } else if (error.message === ERROR_MESSAGES_CLIENT.INVALID_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CLIENT.INVALID_ID,
    };
  } else if (error.message === ERROR_MESSAGES_CLIENT.INVALID_NAME) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CLIENT.INVALID_NAME,
    };
  } else if (error.message === ERROR_MESSAGES_CLIENT.INVALID_CITY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CLIENT.INVALID_CITY,
    };
  } else if (error.message === ERROR_MESSAGES_CLIENT.INVALID_SALESMAN) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CLIENT.INVALID_SALESMAN,
    };
  } else if (error.message === ERROR_MESSAGES_CLIENT.INVALID_SERVICE_DAY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CLIENT.INVALID_SERVICE_DAY,
    };
  } else if (error.message === ERROR_MESSAGES_CLIENT.INVALID_STATUS) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CLIENT.INVALID_STATUS,
    };
  }

  // message of the errors for item model!
  else if (error.message === ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART_ITEM.PRODUCT_NOT_FOUND,
    };
  } else if (
    error.message === ERROR_MESSAGES_CART_ITEM.PRODUCT_ERROR_ADD_TO_CART
  ) {
    return {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGES_CART_ITEM.PRODUCT_ERROR_ADD_TO_CART,
    };
  } else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_TYPE_QUANTITY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART_ITEM.INVALID_TYPE_QUANTITY,
    };
  } else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_PRODUCT_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART_ITEM.INVALID_PRODUCT_ID,
    };
  } else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_ID_EMPTY) {
    return {
      statusbar: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART_ITEM.INVALID_ID_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART_ITEM.INVALID_CART_ID_TYPE,
    };
  }

  // INVALID_CART_ID

  // message of the errors for cart model!
  else if (error.message === ERROR_MESSAGES_CART.USER_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_CART.USER_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_CART.CLIENT_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_CART.CLIENT_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_CART.PAYMENT_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_CART.PAYMENT_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_PAYMENT) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_CART.INVALID_PAYMENT,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_CLIENT) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_CART.INVALID_CLIENT,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_USER) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_CART.INVALID_USER,
    };
  } else if (error.message === ERROR_MESSAGES_CART.CART_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: ERROR_MESSAGES_CART.CART_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_CLIENT_ID_TO_CART) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.INVALID_CLIENT_ID_TO_CART,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_USER_ID_TO_CART) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.INVALID_USER_ID_TO_CART,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.INVALID_ID,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_ID_EMPTY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.INVALID_ID_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_DATE_FROM) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.INVALID_DATE_FROM,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_DATE_UNTIL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.INVALID_DATE_UNTIL,
    };
  } else if (error.message === ERROR_MESSAGES_CART.DATA_RANGE_ERROR) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.DATA_RANGE_ERROR,
    };
  } else if (error.message === ERROR_MESSAGES_CART.INVALID_PAYMENT_ID_TO_CART) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.INVALID_PAYMENT_ID_TO_CART,
    };
  } else if (error.message === ERROR_MESSAGES_CART.CART_EMPTY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.CART_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_CART.CART_NOT_ASSOCIATED) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_CART.CART_NOT_ASSOCIATED,
    };
  }

  // message of the errors for payment method model!
  else if (error.message === ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME,
    };
  } else if (
    error.message === ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME_EMPTY
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT_METHOD.INVALID_NAME_EMPTY,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID_EMPTY) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT_METHOD.INVALID_ID_EMPTY,
    };
  } else if (
    error.message === ERROR_MESSAGES_PAYMENT_METHOD.PAYMENT_NOT_FOUND
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT_METHOD.PAYMENT_NOT_FOUND,
    };
  }

  // message of the errors for payment model!
  else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_USER_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_USER_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_USER_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_USER_ID,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_PAYMENT_ID,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_VALUE_AMOUNT) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_VALUE_AMOUNT,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_VALUE_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_VALUE_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_VALUE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_VALUE,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_CLIENT_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_ID,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.PAYMENT_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.PAYMENT_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.NO_PENDING) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.NO_PENDING,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_DATE_FROM) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_DATE_FROM,
    };
  } else if (error.message === ERROR_MESSAGES_PAYMENT.INVALID_DATE_UNTIL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_PAYMENT.INVALID_DATE_UNTIL,
    };
  }

  // message of the errors for vehicle model!
  else if (error.message === ERROR_MESSAGES_VEHICLE.VEHICLE_ALREADY_EXISTS) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.VEHICLE_ALREADY_EXISTS,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.VEHICLE_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.VEHICLE_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_OPTION) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_OPTION,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_STATUS_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_STATUS_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_STATUS) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_STATUS,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_WEIGHT_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_WEIGHT_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_WEIGHT) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_WEIGHT,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_BRAND_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_BRAND_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_BRAND) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_BRAND,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.NOT_ALLOWED_CHARACTER) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.NOT_ALLOWED_CHARACTER,
    };
  } else if (
    error.message === ERROR_MESSAGES_VEHICLE.INVALID_LICENSE_PLATE_TYPE
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_LICENSE_PLATE_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_LICENSE_PLATE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_LICENSE_PLATE,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_MODEL_LENGTH) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_MODEL_LENGTH,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_MODEL_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_MODEL_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_MODEL) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_MODEL,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_ID,
    };
  } else if (error.message === ERROR_MESSAGES_VEHICLE.INVALID_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_VEHICLE.INVALID_ID_TYPE,
    };
  }

  // message of the errors for vehicle model!
  else if (error.message === ERROR_MESSAGES_LOAD.INVALID_NAME) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_NAME,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_NAME_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_NAME_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_ID,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_VEHICLE_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_VEHICLE_ID,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_VEHICLE_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_VEHICLE_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_CART_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_CART_ID,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_CART_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_CART_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_USER_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_USER_ID,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_USER_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_USER_ID_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.INVALID_STATUS) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.INVALID_STATUS,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.OPEN_LOAD) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.OPEN_LOAD,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.DATA_RANGE_ERROR) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.DATA_RANGE_ERROR,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.LOAD_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.LOAD_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.DUPLICATE_NAME) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.DUPLICATE_NAME,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.VEHICLE_NOT_FOUND) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.VEHICLE_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.VEHICLE_ALREADY_REGISTERED) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.VEHICLE_ALREADY_REGISTERED,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.ERROR_DUPLICATE_STATUS) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.ERROR_DUPLICATE_STATUS,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.LOAD_NAME_PENDING) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.LOAD_NAME_PENDING,
    };
  } else if (error.message === ERROR_MESSAGES_LOAD.LOAD_DELETE_RESTRICTED) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_LOAD.LOAD_DELETE_RESTRICTED,
    };
  }

  // message of the errors for debt model
  else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_CLIENT_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_CLIENT_ID,
    };
  } else if (
    error.message === ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_CLIENT_ID
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_CLIENT_ID,
    };
  } else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_NAME) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_NAME,
    };
  } else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_NAME_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_NAME_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_PRICE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_PRICE,
    };
  } else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_PRICE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_PRICE,
    };
  } else if (
    error.message === ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_TRANSACTION
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_TYPE_TRANSACTION,
    };
  } else if (
    error.message ===
    ERROR_MESSAGES_TRANSACTION.INVALID_OPTION_TYPES_TRANSACTION
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_OPTION_TYPES_TRANSACTION,
    };
  } else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_DESCRIPTION) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_DESCRIPTION,
    };
  } else if (
    error.message === ERROR_MESSAGES_TRANSACTION.INVALID_DESCRIPTION_TYPE
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_DESCRIPTION_TYPE,
    };
  } else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_ID) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_ID,
    };
  } else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_ID_TYPE) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_ID_TYPE,
    };
  } else if (
    error.message === ERROR_MESSAGES_TRANSACTION.TRANSACTION_NOT_FOUND
  ) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.TRANSACTION_NOT_FOUND,
    };
  } else if (error.message === ERROR_MESSAGES_TRANSACTION.INVALID_STATUS) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: ERROR_MESSAGES_TRANSACTION.INVALID_STATUS,
    };
  }

  return {
    status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
    message: "Erro desconhecido ocorreu.",
  };
}

export { handleErros };
