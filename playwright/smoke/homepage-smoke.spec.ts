import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Title/);
  await expect(page.locator('header').getByRole('navigation')).toBeVisible();
});
 