### Summary

App displays empty screen instead of cached content when opened without internet connection for existing Users.

### Priority

High

### Environment

Production app, v_0.6.7

### Preconditions

User is logged in, User has previously opened the app and loaded content successfully. Cached data is available.

### User details

1. User 1

- User Email: offlineuser@gmail.com
- User UID: Of92LmNxTq45ZxCvB78YuIoPkL01
- OS: Android
- OS Version: 12
- Model: Google Pixel 5

2. User 2

- User Email: offlineuser2@gmail.com
- User UID: Pl87MnBvCxZaQwErTyUiOpLkJH56
- OS: iOS
- OS Version: 16.7
- Model: Apple iPhone 11

### Steps to reproduce

1. Disable internet connection (Airplane mode). Open the app. Verify that home feed screen is diplayed as designed with the content displayed from cache.
2. Verify that offline snackbar message is diplayed as designed.

### Expected results

1. Home feed screen is diplayed as designed with the content displayed from cache.
2. Offline snackbar message is diplayed as designed.

### Actual results

1. Screen appears empty (no content displayed).
2. No offline message or error state is shown.

### Comments

--
