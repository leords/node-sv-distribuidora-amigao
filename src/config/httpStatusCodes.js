export const HTTP_STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
};

export const ERROR_MESSAGES_USER = {
    INVALID_EMAIL: 'Email fornecido é inválido',
    SHORT_PASSWORD: 'A senha deve conter ao menos 8 caracteres',
    ERROR_REQ: 'ID de usuário é obrigatório',
    INVALID_USER: 'Usuário não encontrado',
    INVALID_TYPE_ID: 'ID deve ser um número',
    INVALID_TYPE_STATUS: 'Status deve ser do tipo boleano, false ou true', //dar entrada no errorHandle
    INVALID_TYPE_ACCESSLEVEL: 'Nivel de acesso deve ser do tipo texto', //dar entrada no errorHandle
    INVALID_TYPE_PROFESSION: 'Profissão deve ser no tipo texto', //dar entrada no errorHandle
    INVALID_PROFESSION_NOT_EXIST: 'Profissão escolhida não existe',
    DATABASE_ERROR: 'Erro ao criar o usuário no banco de dados',
    DATABASE_DELETE_ERROR: 'Erro ao excluir usuário no banco de dados',
    DATABASE_UPDATE_ERROR: 'Erro ao atualizar usuário no banco de dados',
};

export const SUCESS_MESSAGES_USER = {
    USER_CREATED: 'Usuário criado com sucesso!',
    USER_UPDATED: 'Usuário atualizado com sucesso!',
    USER_DELETED: 'Usuário excluído com sucesso!',
}

export const ERROR_MESSAGES_PROFISSION = {
    INVALID_DESCRIPTION_ISNUMBER: 'A profissão deve conter apenas letras',
    INVALID_DESCRIPTION_CHARACTER: 'A profissão deve conter no máximo 50 caracteres',
    INVALID_DESCRIPTION_EMPTY: 'A profissão não pode ser nula',
    INVALID_TYPE_ID: 'ID deve ser um número',
    INVALID_TYPE_DESCRIPTION: 'Descrição deve ser do tipo texto',
    INVALID_ID_EMPTY: 'O ID não pode ser nulo',

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