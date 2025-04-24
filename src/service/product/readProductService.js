import prismaClient from "../../prisma/index.js"

class ReadProductService {
    async execute(filters) {
        try {
            const products = await prismaClient.product.findMany({
                where: {
                    segment: filters.segment ? filters.segment : undefined,
                    supplier: filters.supplier ? filters.supplier : undefined,
                    status: filters.status ? Boolean(filters.status) : undefined,
                    name: filters.name ? filters.name : undefined
                },
            });   
            return products    
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export { ReadProductService }