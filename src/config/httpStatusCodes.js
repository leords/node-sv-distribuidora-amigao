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
    DATABASE_ERROR: 'Erro ao criar o usuário no banco de dados',
    DATABASE_DELETE_ERROR: 'Erro ao excluir usuário no banco de dados',
    DATABASE_UPDATE_ERROR: 'Erro ao atualizar usuário no banco de dados',
};

export const SUCESS_MESSAGES_USER = {
    USER_CREATED: 'Usuário criado com sucesso!',
    USER_UPDATED: 'Usuário atualizado com sucesso!',
    USER_DELETED: 'Usuário excluído com sucesso!'
}