describe('Verificar número de Cards al Inicio', () => {
    beforeEach(() => {
        cy.visit('https://jojacomu.github.io/hoteles');
    });

    it('Verificar que las todas las cards aparecen desde un inicio', () => {
        cy.get('.card').should('have.length', 18);
    });

    it('Seleccionar filtro de precio', () => {
        cy.get('#prices').select('$').should('have.value', '1');
        cy.get('.textoCard p:nth-child(2)').should('have.length', 3);
        cy.get('#prices').select('$$').should('have.value', '2');
        cy.get('.textoCard p:nth-child(2)').should('have.length', 4);
        cy.get('#prices').select('$$$').should('have.value', '3');
        cy.get('.textoCard p:nth-child(2)').should('have.length', 2);
        cy.get('#prices').select('$$$$').should('have.value', '4');
        cy.get('.textoCard p:nth-child(2)').should('have.length', 9);
    });

    it('Seleccionar botón clear', () => {
        cy.get('#country').select('Argentina').should('have.value', 'Argentina');
        cy.get('.card').should('have.length', 8);
        cy.get('.clear').click();
        cy.get('.card').should('have.length', 18); 
    });
});