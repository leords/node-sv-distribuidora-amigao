async function addProductToCart(cartId, productId, quantity) {
    try {
      // 1. Buscar o produto no banco de dados pelo ID
      const product = await prisma.produto.findUnique({
        where: { id: productId },
      });
  
      if (!product) {
        throw new Error('Produto não encontrado.');
      }
  
      // 2. Calcular o preço total com base na quantidade
      const total = product.price * quantity;
  
      // 3. Criar o CartItem com os dados do produto
      const cartItem = await prisma.cartItem.create({
        data: {
          cartId,
          productId,
          productName: product.name, // Nome do produto no momento da adição
          price: product.price, // Preço do produto no momento da adição
          quantity,
          total, // Total calculado
        },
      });
  
      return cartItem;
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      throw error;
    }
  }