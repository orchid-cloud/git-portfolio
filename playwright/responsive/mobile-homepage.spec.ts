import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test('Mobile homepage renders', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: /find your dream/i }),
  ).toBeVisible();
});
