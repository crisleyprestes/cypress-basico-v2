/// <reference types ="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function(){

    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function(){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,'
        cy.get('#firstName').type('Crisley')
        cy.get('#lastName').type('Linhares')
        cy.get('#email').type('crisley@email.com')
        cy.get('#open-text-area').type(longText, { delay:0 })
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Crisley')
        cy.get('#lastName').type('Linhares')
        cy.get('#email').type('email.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('valida se o campo "Telefone" fica vazio quando dados não numéricos são inseridos', function(){
        cy.get('#phone').type('Teste').should('have.value', '')
    })

    it.only('exibe mensagem de erro quando o telefone se torna obrigatório, mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Crisley')
        cy.get('#lastName').type('Linhares')
        cy.get('#email').type('crisley@email.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
})
