class ProdutosPage {

 

   buscarProduto(produto) {
    cy.get('.tbay-search').eq(1).type(produto)
    cy.get('.button-search').eq(1).click()

   }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.wait(2000)
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click({force:true})
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho')
        

    }
}




export default new ProdutosPage()


