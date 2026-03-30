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
    await page.evaluate(() => {
      window.scrollTo({ top: 500, behavior: 'instant' });
      window.dispatchEvent(new Event('scroll'));
    });
    await page.waitForTimeout(300);
    const fab = page.getByRole('button', { name: 'Scroll to top' });
    await expect(fab).toBeVisible({ timeout: 3000 });
  });

  test('clicking FAB scrolls back to top', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollTo({ top: 800, behavior: 'instant' });
      window.dispatchEvent(new Event('scroll'));
    });
    await page.waitForTimeout(300);
    const fab = page.getByRole('button', { name: 'Scroll to top' });
    await expect(fab).toBeVisible({ timeout: 3000 });

    await fab.click();

    await expect(async () => {
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBe(0);
    }).toPass({ timeout: 5000 });
  });
});
