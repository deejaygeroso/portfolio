import { expect, test } from '@playwright/test';

test.describe('Theme Switcher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('theme switcher button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Switch theme' })).toBeVisible();
  });

  test('clicking theme switcher opens theme popover', async ({ page }) => {
    await page.getByRole('button', { name: 'Switch theme' }).click();
    await expect(page.getByText('Choose theme')).toBeVisible();
  });

  test('selecting "Dark Ocean" theme applies data-theme attribute', async ({ page }) => {
    await page.getByRole('button', { name: 'Switch theme' }).click();
    await page.getByRole('button', { name: 'Dark Ocean' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark-ocean');
  });

  test('switching back to "Light" theme applies data-theme attribute', async ({ page }) => {
    await page.getByRole('button', { name: 'Switch theme' }).click();
    await page.getByRole('button', { name: 'Dark Ocean' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark-ocean');

    await page.getByRole('button', { name: 'Switch theme' }).click();
    await page.getByRole('button', { name: 'Light' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });
});
