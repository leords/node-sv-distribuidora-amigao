export const HTTP_STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
};

// usuário
export const ERROR_MESSAGES_USER = {
    INVALID_EMAIL: 'Email fornecido é inválido',
    SHORT_PASSWORD: 'A senha deve conter ao menos 8 caracteres',
    INVALID_ID_USER_EMPTY: 'ID de usuário é obrigatório',
    INVALID_USER_NOT_FOUND: 'Usuário não encontrado',
    INVALID_TYPE_ID: 'User Id deve ser um número',
    INVALID_TYPE_STATUS: 'Status deve ser boleano',
    INVALID_TYPE_ACCESSLEVEL: 'Nivel de acesso deve ser um texto',
    INVALID_TYPE_PROFESSION: 'Profissão deve ser um texto',
    INVALID_PROFESSION_NOT_FOUND: 'Profissão não encontrada',
    DATABASE_ERROR: 'Erro ao criar o usuário no banco de dados',
    DATABASE_DELETE_ERROR: 'Erro ao excluir usuário no banco de dados',
    DATABASE_UPDATE_ERROR: 'Erro ao atualizar usuário no banco de dados',
};

export const SUCESS_MESSAGES_USER = {
    USER_CREATED: 'Usuário criado com sucesso!',
    USER_UPDATED: 'Usuário atualizado com sucesso!',
    USER_DELETED: 'Usuário excluído com sucesso!',
}


//profissão
export const ERROR_MESSAGES_PROFISSION = {
    INVALID_DESCRIPTION_ISNUMBER: 'A profissão deve conter apenas letras',
    INVALID_DESCRIPTION_CHARACTER: 'A profissão deve conter no máximo 50 caracteres',
    INVALID_DESCRIPTION_EMPTY: 'A profissão não pode ser nula',
    INVALID_TYPE_ID: 'ID deve ser um número',
    INVALID_TYPE_DESCRIPTION: 'Descrição deve ser do tipo texto',
    INVALID_ID_EMPTY: 'o ID de profissão não pode ser vazio ou nulo',

    DESCRIPTION_NOT_FOUND: 'Profissão não encontrada',

    DATABASE_DELETE_ERROR: 'Erro ao excluir profissão no banco de dados',
    DATABASE_CREATE_ERROR: 'Erro ao criar profissão no banco de dados',
    DATABASE_DELETE_ERROR_USER_RELATIONS: 'Não é possível excluir, há usúarios em relação com essa profissão',
    DATABASE_ERROR: 'Erro na consulta do bando de dados',

    DATABASE_PROFESSION_EMPTY: 'Nenhuma profissão cadastrada'
}

export const SUCESS_MESSAGES_PROFISSION = {
    PROFISSION_CREATED: 'Profissão criada com sucesso!',
    PROFISSION_DELETED: 'Profissão excluída com sucesso!'
}


//produto
export const ERROR_MESSAGES_PRODUCT = {
    SYNCHRONIZE_PRODUCT_ERROR: 'Erro ao sincronizar produtos',
    HTTP_STATUS_CODE_ERROR_FATCH: 'HTTP ERROR! status:',
}

export const SUCESS_MESSAGES_PRODUCT = {
    SYNCHRONIZE_PRODUCT_SUCESS: 'Produtos sincronizados com sucesso',
}


//cliente
export const ERROR_MESSAGES_CLIENT = {
    SYNCHRONIZE_CLIENT_ERROR: 'Erro ao sincronizar clientes',
    HTTP_STATUS_CODE_ERROR_FATCH: 'HTTP ERROR! status:',
    INVALID_ID: 'ClientId espera um número valido'
}

export const SUCESS_MESSAGES_CLIENT = {
    SYNCHRONIZE_CLIENT_SUCESS: 'Clientes sincronizados com sucesso',
}


//item
export const SUCESS_MESSAGES_CART_ITEM = {
    PRODUCT_REGISTERED_SUCCESSFULLY: 'Item registrado no carrinho com sucesso',
    PRODUCT_DELETED_SUCCESSFULLY: 'Item deletado do carrinho com sucesso',
    PRODUCT_UPDATED_SUCCESSFULLY: 'Item do carrinho atualizado com sucesso'
}

export const ERROR_MESSAGES_CART_ITEM = {
    PRODUCT_NOT_FOUND: 'Produto não encontrado',
    PRODUCT_ERROR_ADD_TO_CART: 'Erro ao adicionar o produto no carrinho',
    INVALID_TYPE_QUANTITY: 'A Quantidade deve ser um número',
    INVALID_PRODUCT_ID: 'ID Produto deve ser um número',
    INVALID_QUANTIFY_EMPTY: 'A Quantidade é obrigatória',
    INVALID_ID_EMPTY: 'ID do Produto é obrigatório',
    INVALID_QUATIFY_RANGE: 'Quantidade está fora do intervalo ideal de 1 - 100',
    INVALID_CART_ID_EMPTY: 'ID do Carrinho é obrigatório',
    INVALID_CART_ID_TYPE: 'O ID do Carrinho deve ser um número'
}


//carrinho
export const SUCESS_MESSAGES_CART = {
    CART_CREATED_SUCCESSFULLY: 'Carrinho criado com sucesso',
    CART_DELETED_SUCCESSFULLY: 'Carrinho exluido com sucesso',
    CART_UPDATED_SUCCESSFULLY: 'Carrinho atualizado com sucesso'
}

export const ERROR_MESSAGES_CART = {
    CART_NOT_FOUND: 'Carrinho não encontrado',
    INVALID_CLIENT_ID_TO_CART: 'ID CLIENT deve ser um número',
    INVALID_USER_ID_TO_CART: 'ID USER deve ser um número',
    INVALID_ID: 'CartId deve ser um número',
    INVALID_ID_EMPTY: 'ID é obrigatório',
    INVALID_DATE: 'Date deve ser uma data válida',
    INVALID_PAYMENT_ID_TO_CART: 'PaymentId deve ser um número',
    DATA_RANGE_ERROR: 'A data final não pode ser menor que a data inicial',
    INVALID_STATUS_DELIVERY: 'Status do Delivery deve ser um texto',
    INVALID_STATUS_DELIVERY_EMPTY: 'Status do Delivery é obrigatório',
    INVALID_STATUS_DELIVERY_TYPE: 'Status do Delivery só aceita as opção: "pendente" | "entregue" | "devolvido" | "carregado" ',
    INVALID_FILTER_TYPE: 'Filter type só aceita as opção: "sales" | "orders" ',
}
// forma de pagamento
export const SUCESS_MESSAGE_PAYMENT = {
    PAYMENT_CREATED_SUCCESSFULLY: 'Forma de pagamento criado com sucesso',
    PAYMENT_DELETED_SUCCESSFULLY: 'Forma de pagamento excluida com sucesso'
}
export const ERROR_MESSAGES_PAYMENT = {
    INVALID_NAME: 'NAME deve ser um texto',
    INVALID_NAME_EMPTY: 'NAME é obrigatório',
    INVALID_LENGTH_NAME: 'NAME está com o tamanho maior que o intervalo ideial de até 50 caracteres',
    INVALID_ONLY_LETTERS: 'NAME espera somente letras de a-z',
    INVALID_ID: 'ID deve ser um número',
    INVALID_ID_EMPTY: 'ID é obrigatório',
    PAYMENT_NOT_FOUND: 'Está forma de pagamento não foi encontrada',
}


export const HTTP_API = {
    HTTP_STATUS_CODE_ERROR_FATCH: 'HTTP STATUS CODE ERROR'
}