//Función "describe" para definir el escenario de prueba
describe("Verificar número de Cards al Inicio", () => {
    beforeEach(() => {
        cy.visit("https://dsanchezvalle.github.io/hotelbookingsprint");
    }); // Condición previa para poder acceder a la prueba

    it("Verificar que las todas las cards aparecen desde un inicio", () => {
        // Bloque de acciones a testear
        cy.get(".HotelCard").should("have.length", 18); // Prueba que te carguen 18 tarjetas de hoteles que vienen del json
    });

    it("Seleccionar filtro de precio", () => {
        // Bloque de acciones a testear
        cy.get("#filter-prices").select("$");
        cy.get(".HotelCard__Price:contains('$')").should("have.length", 3);
        cy.get("#filter-prices").select("$$");
        cy.get(".HotelCard__Price:contains('$$')").should("have.length", 4);
        cy.get("#filter-prices").select("$$$");
        cy.get(".HotelCard__Price:contains('$$$')").should("have.length", 2);
        cy.get("#filter-prices").select("$$$$");
        cy.get(".HotelCard__Price:contains('$$$$')").should("have.length", 9);
    });

    it("Seleccionar botón clear", () => {
        // Bloque de acciones a testear
        cy.get(".Filter__Clear").click();
        cy.get(".HotelCard").should("have.length", 18); // Prueba que te carguen 18 tarjetas de hoteles que vienen del json
    });
});