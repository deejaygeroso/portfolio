import { expect, test } from '@playwright/test';

test.describe('Welcome Screen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section is visible', async ({ page }) => {
    await expect(page.locator('#MainPage')).toBeVisible();
  });

  test('profile picture is visible', async ({ page }) => {
    await expect(page.locator('#profile-picture')).toBeVisible();
  });

  test('"View My Work" button is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'View My Work' })).toBeVisible();
  });

  test('"View My Work" button scrolls to Projects section', async ({ page }) => {
    await page.getByRole('link', { name: 'View My Work' }).click();
    await expect(page.locator('#Projects')).toBeInViewport();
  });
});
