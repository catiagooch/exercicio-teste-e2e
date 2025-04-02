/// <reference types="cypress" />
import produtosPage from "../support/page-objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
        before(() => {
       cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    })

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.addProdutoCarrinho('XS', 'Red', 1)
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Blue', 1)
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('L', 'Black', 1)
        produtosPage.buscarProduto('Argus All-Weather Tank')
        produtosPage.addProdutoCarrinho('XL', 'Gray', 1)

        cy.get('.cart-icon').click()
        cy.get('.cart-item').click()
        cy.get('.checkout-button').click()

        cy.get('[name="billing_first_name"]').type('Catia')
        cy.get('[name="billing_first_name"]').type('Velasco')
        cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').select('Brasil')
        cy.get('#billing_address_1').type('Rua da Felicidade n 25')
        cy.get('#billing_city').type('Rio de Janeiro')
        cy.get('#billing_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').select('Rio de Janeiro')
        cy.get('#billing_postcode').type('21744-987')
        cy.get('#billing_phone').type('2165-0098')
        cy.get('#billing_email').type('catiavelasco@teste.com')
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.contains('PEDIDO RECEBIDO').should('be.visible')

    });

})