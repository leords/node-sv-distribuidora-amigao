
class Cart {

    static allowedStatuses = ['pendente', 'carregado', 'entregue', 'devolvido'];

    constructor(status) {
        this.status = status;

        if(!status) {
            throw new Error();
        }

       this.validate();
    }

    validate() {
        if(!Cart.allowedStatuses.includes(this.status)) {
            throw new Error("Status inválido. Permitido apenas: pendente, carregado, entregue ou devolvido.")
        }

    }
}