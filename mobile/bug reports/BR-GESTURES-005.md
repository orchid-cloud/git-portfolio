**Summary**

Horizontal swipe gesture inside carousel item conflicts with vertical scroll, causing unintended screen navigation instead of scrolling.

**Priority**
Medium

**Environment**
Production app, v_0.1.2

**Preconditions**
User is logged in, Carousel component is present on the home feed.

**Steps to reproduce**

1. Locate the Featured Items carousel component. Scroll vertically starting from within the carousel area.
2. Verify that home feed is scrolled down with no change to the Featured Items carousel component.

**Expected results**

1. -
2. Home feed is scrolled down with no change to the Featured Items carousel component.

**Actual results**

1. -
2. The carousel component is scrolled horizontally. Home feed is not scrolled down.

**Comments**
The carousel item should stay in the previous state, while home feed should be scrolled down.
![screenvideo-scroll-gesture](../assets/example)
