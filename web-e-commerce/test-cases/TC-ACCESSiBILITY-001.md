**Test Case ID**: TC-ACCESSIBILITY-001

**Title**: Verify correct keyboard navigation order and presence of “Skip to Content” functionality

**Summary**: To ensure that Users navigating via keyboard can efficiently access main content and that focus order follows accessibility best practices

**Priority**: High

### Environment

- Production web app, v_2.4.1
- Browsers: Chrome, Firefox, Opera

### Test Type

Functional testing.

### Preconditions

- User is logged in
- Homepage is fully loaded
- Keyboard is available

### Steps

1. Press the Tab key once after page load. Verify the first focused element. Continue pressing Tab to navigate to the Skip to Content link.
2. Press Enter on Skip to Content. Verify focus moves to the main content section.

### Expected results

1. The first focused element is menu item.
2. Focus moves to the main content section.

### Actual results

_To be filled after testing_

### Status

_To be filled after testing_
- _Pass - for a passed test_
- _Fail - for a failed test_

### Comments

_To be filled in case of additional information_
