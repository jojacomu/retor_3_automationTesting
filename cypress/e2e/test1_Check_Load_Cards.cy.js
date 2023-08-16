//Función "describe" para definir el escenario de prueba
describe("Verificar número de Cards al Inicio", () => {
    beforeEach(() => {
        cy.visit("https://jojacomu.github.io/hoteles");
    }); // Condición previa para poder acceder a la prueba

    it("Verificar que las todas las cards aparecen desde un inicio", () => {
        // Bloque de acciones a testear
        cy.get(".card").should("have.length", 18); // Prueba que te carguen 18 tarjetas de hoteles que vienen del json
    });

    it("Seleccionar filtro de precio", () => {
        // Bloque de acciones a testear
        cy.get("#prices").select("$");
        cy.get(".textoCard p:contains('Price: $')").should("have.length", 3);
        cy.get("#prices").select("$$");
        cy.get(".textoCard p:contains('Price: $$')").should("have.length", 4);
        cy.get("#prices").select("$$$");
        cy.get(".textoCard p:contains('Price: $$$')").should("have.length", 2);
        cy.get("#prices").select("$$$$");
        cy.get(".textoCard p:contains('Price: $$$$')").should("have.length", 9);
    });

    it("Seleccionar botón clear", () => {
        // Bloque de acciones a testear
        cy.get("#departure").select("2023-08-16");
        cy.get("#returntrip").select("2023-08-30");
        cy.get(".card").should("have.lenght", 3) // Prueba que encuentre 3 hoteles que se encuentran disponibles en el rango de fecha seleccionado
        cy.get(".clear").click();
        cy.get(".card").should("have.length", 18); // Prueba que te carguen 18 tarjetas de hoteles que vienen del json
    });
});