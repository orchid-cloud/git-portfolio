import { test, expect } from '@playwright/test';

test('dropdown menu with countries list exist', async ({ page }) => {
  await page.goto('/');

  const locationSelect = page.locator('.hero-location-select__control');
  await locationSelect.click();

  await expect(locationSelect).toHaveClass(/menu-is-open/);
});
