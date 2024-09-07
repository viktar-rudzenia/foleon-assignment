describe('Not Found Page', () => {
  it("should display the Not Found message if route doesn't exist", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('NEXT_NOT_FOUND')) {
        return false; // Prevent test failure
      }
    });

    // Visit a non-existent route
    cy.visit('http://localhost:3000/non-existent-page', { failOnStatusCode: false });

    // Check for specific content within the Not Found page
    cy.get('[data-testid="page-not-found"]').should('contain', 'Page not found');
  });

  it('should return to Home from Not Found Page on click', () => {
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('NEXT_NOT_FOUND')) {
        return false; // Prevent test failure
      }
    });

    // Visit a non-existent route
    cy.visit('http://localhost:3000/non-existent-page', { failOnStatusCode: false });

    // Check for specific content within the Not Found page
    cy.get('[data-testid="back-to-home"]').click();

    cy.url().should('equal', 'http://localhost:3000/');
  });
});
