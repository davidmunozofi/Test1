
/// <reference types="Cypress" />
 
context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://login.ofi.cloud')
    })
  
    // intento 1 de logarme
  
    it('.submit() - submit a form', () => {
        // https://on.cypress.io/submit
        cy.get('.formulario-acceso')
          .find('[type="text"]').type('david@ofi.es')
        cy.get('.formulario-acceso')
        .find('[type="password"]').type('david.')
        cy.get('.formulario-acceso').submit()
          
      })
    })