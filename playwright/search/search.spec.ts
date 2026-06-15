import { test, expect } from '@playwright/test';

test('search', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Search by keyword').fill('QA');
  await page.getByLabel('Find').click();

  await expect(page).toHaveURL((url) => {
    const parseUrl = new URL(url);
    return parseUrl.searchParams.get('filters[term]')?.toLowerCase() === 'qa';
  });
});
