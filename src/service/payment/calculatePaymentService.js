import prismaClient from "../../prisma/index.js"

class CalculatePaymentService {
    async execute(clientId) {

        try {
            // Soma de todos carrinhos com forma de pagamento VALE, referente a este clientId.
            const accumulatedCartsPending = await prismaClient.cart.aggregate({
                _sum: {
                    total: true
                },
                where: {
                    clientId: clientId,
                    paymentId: 3
                }
            });

            // Soma de todos os pagamentos criados para este clientId
            const accumulatedPayment = await prismaClient.payment.aggregate({
                _sum: {
                    value: true
                },
                where : {
                    clientId: clientId
                }
            });

            const totalCartsValue = accumulatedCartsPending._sum.total || 0
            const totalPayments = accumulatedPayment._sum.value || 0

            const total = totalCartsValue - totalPayments

            if(total <= 0) {
                return {
                    message: 'Não existe pendencias no momento',
                    total: total
                }
            }

            return {
                message: 'Pagamento pendente',
                total: total
            }
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export { CalculatePaymentService }