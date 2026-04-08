describe('Registration Test Case', () => {
  it('should register successfully with valid credentials', () => {
    const FirstName = 'First';
    const LastName = 'User';
    const email = `test${Date.now()}@mail.com`;
    const password = 'Test1234';

    cy.visit('https://demowebshop.tricentis.com/register');

    cy.get('#FirstName').type(FirstName);
    cy.get('#LastName').type(LastName);
    cy.get('#Email').type(email);
    cy.get('#Password').type(password);
    cy.get('#ConfirmPassword').type(password);

    cy.get('#register-button').click();

    cy.url().should('include', '/registerresult');
    cy.contains('Your registration completed');
    cy.contains('Log out').should('be.visible');
  });
});
