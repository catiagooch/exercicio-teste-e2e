/// <reference types="cypress" />
import produtosPage from "../support/page-objects/produtos.page.js"

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
        beforeEach(() => {
          cy.visit('http://lojaebac.ebaconline.art.br/produtos')
        });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.addProdutoCarrinho('XS', 'Red', 2)
        
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('S', 'Blue', 2)
      
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('L', 'Black', 2)
       
        produtosPage.buscarProduto('Argus All-Weather Tank')
        produtosPage.addProdutoCarrinho('XL', 'Gray', 2)

        //cy.get('.cart-icon').click()
        //cy.get('.cart-item').click()
        //cy.get('.checkout-button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        cy.get('[name="billing_first_name"]').type('Catia')
        cy.get('[name="billing_last_name"]').type('Velasco')
        cy.get('#billing_country_field .select2-selection').click()
        cy.contains('.select2-results__option', 'Brasil').click()
        cy.get('#billing_address_1').type('Rua da Felicidade n 25')
        cy.get('#billing_city').type('Rio de Janeiro')
        cy.get('#billing_state_field .select2-selection').click()
        cy.contains('.select2-results__option', 'Rio de Janeiro').click()
        cy.get('#billing_postcode').type('21744-987')
        cy.get('#billing_phone').type('2165-0098')
        cy.get('#billing_email').type('catiavelasco@teste.com')
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido')

    });

})