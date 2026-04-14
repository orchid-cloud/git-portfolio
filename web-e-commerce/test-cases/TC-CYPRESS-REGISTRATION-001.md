**Test Case ID**: TC-CY-REG-001
**Title**: Verify registration with valid credentials
**Summary**: New User should be able to register with valid credentials
**Priority**: High
**Automation Framework**: Cypress

### Environment

Application: Staging build
Browser: Chrome
OS: Windows 11

### Test Type

Functional testing.

### Preconditions

User is not registered.

### Automated test

```
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
```

### Status

_To be filled after testing_
_Pass - for a passed test_
_Fail - for a failed test_

### Comments

_To be filled in case of additional information_
