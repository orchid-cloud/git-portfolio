describe('Product Search Test Case', () => {
  it('should return matching products for a valid search query', () => {
    cy.visit('https://demowebshop.tricentis.com/');

    cy.get('#small-searchterms').type('computer');
    cy.get('input[value="Search"]').click();

    cy.url().should('include', '/search');
    cy.contains('Search').should('be.visible');
    cy.contains('computer', { matchCase: false }).should('exist');
  });
});
