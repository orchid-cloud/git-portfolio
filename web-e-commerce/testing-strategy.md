# Testing Strategy – E-commerce Platform

Application: Demo Web Shop
URL: https://demowebshop.tricentis.com

## Objectives

- Ensure core business flows work correctly (login, cart, checkout)
- Validate payment handling and error scenarios
- Verify API reliability and performance
- Ensure cross-browser compatibility

## Testing Types

- Functional Testing
- Regression Testing
- Exploratory Testing
- API Testing
- UI Testing
- Cross-browser Testing

## Risk-Based Prioritization

High Risk:

- Payment processing
- User authentication
- Order placement

Medium Risk:

- Product search

Low Risk:

- UI styling
- Static content

## Test Environment

Browser: Chrome, Firefox
OS: Windows 11
Tools: Postman, Cypress, DevTools

## Entry / Exit Criteria

Entry:

- Build deployed to staging
- Requirements available

Exit:

- No critical defects open
- All high-priority tests passed
- Application works as desined
