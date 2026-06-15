import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13 Pro'],
});

test('Mobile page renders', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: /find your dream/i }),
  ).toBeVisible();
  await page.getByLabel('Find').click();
  await expect(page.locator('.page-content')).toBeVisible();
});
