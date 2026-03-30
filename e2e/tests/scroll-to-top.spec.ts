import { expect, test } from '@playwright/test';

test.describe('Scroll To Top FAB', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('FAB is not visible at page top', async ({ page }) => {
    await page.waitForTimeout(200);
    const fab = page.getByRole('button', { name: 'Scroll to top' });
    await expect(fab).not.toBeVisible();
  });

  test('FAB appears after scrolling down 500px', async ({ page }) => {
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(500);
    const fab = page.getByRole('button', { name: 'Scroll to top' });
    await expect(fab).toBeVisible({ timeout: 5000 });
  });

  test('clicking FAB scrolls back to top', async ({ page }) => {
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(500);
    const fab = page.getByRole('button', { name: 'Scroll to top' });
    await expect(fab).toBeVisible({ timeout: 5000 });

    await fab.click();

    await expect(async () => {
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBe(0);
    }).toPass({ timeout: 5000 });
  });
});
