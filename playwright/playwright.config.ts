import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  retries: 1,

  reporter: 'html',

  use: {
    headless: true,
    viewport: {
      width: 1280,
      height: 720,
    },

    actionTimeout: 10000,
    ignoreHTTPSErrors: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'mobile-chrome',
      use: {
        ...devices['iPhone 13'],
      },
    },
  ],
});
