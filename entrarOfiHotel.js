
/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
    })

    // intento 1 de logarme

    it('entrar a OfiHotel', () => {
        cy.visit('https://login.ofi.cloud')
        //este formulario es entrando mis datos
        //habrá que cambiarlo por el usuario/contraseña correspondiente de la suscripción que queramos testear
        cy.get('.formulario-acceso')
            .find('[type="text"]')
            .type('david@ofi.es')
        cy.get('.formulario-acceso')
            .find('[type="password"]')
            .type('david.')
        cy.get('.formulario-acceso')
            .submit()
        //esta .get es el de soho de producción
        //todo habria que cambiarlo por el correcto de la suscripción donde queramos hacer los test
        cy.get(':nth-child(3) > .card-suscripcion > .card-suscripcion-header > .icono-aplicacion > .boton-icono-app')
            .click()

    })
    it('cambiar a museo', () => {
        cy.get('#DelegacionActiva').wait(10000)
            .select('Apartamentos Soho Boutique Museo')


    });
})