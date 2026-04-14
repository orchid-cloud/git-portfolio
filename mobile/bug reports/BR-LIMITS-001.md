### Summary

Non-PRO User should have 1 coordinate in RVQ trainer per free plan per day. User has 2 coordinates. After 1st coordinate limit timer doesn’t switch on. Limit timer switches on after 2nd coordinate finished.

### Priority

Medium

### Environment

Production app, v_0.6.7

### Preconditions

User starts RVQ trainer, User has no PRO subscription.

### User details

1. User 1

- User Email: test@gmail.com
- User UID: HSlRC6sH3gNcBslOHRSzPwPQSe62
- OS: iOS
- OS Version: 17.5.1
- Model: Apple iPhone 13 Pro

2. User 2

- User Email: test123@gmail.com
- User UID: Mw2qHe5b7iXmniDXBEMZWAvSuIi2
- OS: iOS
- OS Version: 17.5.1
- Model: Apple iPhone 13 Pro

### Target details

1. Target Number: 5845-4465-57
2. Target Number: 2321-6846-92

### Steps to reproduce

1. Pass the RVQ training until quiz statistics page displayed. Verify that limits screen is displayed according to the design.
2. Tap backarrow icon on the top left corner to return to the main menu.
3. Tap on RVQ trainer to reopen. Verify that limits screen is displayed and User can not proceed with training.

### Expected results

1. Limits screen is displayed according to the design.
2. Main menu displayed.
3. Limits screen is displayed according to the design. User can not proceed with training.

### Actual results

1. Limits screen is displayed according to the design.
2. Main menu displayed.
3. No limits screen is displayed. User is able to train another round.

### Comments

This bug was reproduced on two different accounts in production app.
