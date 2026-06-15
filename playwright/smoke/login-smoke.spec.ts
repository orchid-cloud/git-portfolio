import { test, expect } from '@playwright/test';

test('login page not crashing when visited', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/login$/);
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('input[type="password"]')).toBeVisible();
});
