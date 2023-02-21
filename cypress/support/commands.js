Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Crisley')
    cy.get('#lastName').type('Linhares')
    cy.get('#email').type('crisley@email.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
