**Test Case ID**: TC-PAYMENTS-001
**Title**: Validate error handling for invalid credit card number during checkout
**Summary**: Verify that the system rejects invalid credit card numbers and displays an appropriate error message
**Priority**: High

### Environment

Application: Staging build
Browser: Chrome
OS: Windows 11

### Test Type

Negative testing.

### Preconditions

- User is registered and logged in.
- At least one product is added to the cart.
- User is on the Page Checkout screen - Payment Information.

### Test Data

Card Type: Visa
Cardholder Name: Test User
Card Number: 1234 5678 9012 3456
Expiry Date: Any valid future date
CVV: 123

### Steps

1. Fill in payment information with Test Data.
2. Click Continue button. Verify that error message is diplayed according to the design.

### Expected results

1. -
2. Error message is diplayed according to the design.

### Actual results

_To be filled after testing_

### Status

_To be filled after testing_
_Pass - for a passed test_
_Fail - for a failed test_

### Comments

_To be filled in case of additional information_
