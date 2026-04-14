**Charter ID:** ETC_MOB_001
**Application:** Food Delivery Mobile App

### 1. Mission

Explore how the application handles image loading (restaurant images, menu photos) under slow and unstable network conditions.

### 2. Test Focus Areas

- Image loading behavior on 3G network
- Placeholder and skeleton loaders
- Retry mechanisms on failure
- Scrolling performance while images load
- Behavior after screen refresh
- App behavior when switching between WiFi and mobile data

### 3. Test Techniques

- Network throttling (3G simulation)
- Rapid scrolling
- App background switching
- Interruptions (incoming notifications, calls)

### 4. Test Data

- Multiple restaurant listings with images
- Menu items with high-resolution images

### 5. Risks

- Images not loading at all
- UI layout breaking due to missing images
- Infinite loading states
- Increased app lag or freezes

### 6. Potential Bugs

- Images not displayed on 3G connection
- Missing error handling for failed image requests
- No fallback UI for image loading failure

### 7. Session Duration

60 minutes

### 8. Outcome

_To be filled after testing_
