import { expect, test } from '@playwright/test';

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#Footer').scrollIntoViewIfNeeded();
  });

  test('footer is visible', async ({ page }) => {
    await expect(page.locator('#Footer')).toBeVisible();
  });

  test('"Contact Me" heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contact Me' })).toBeVisible();
  });

  test('social media links are present', async ({ page }) => {
    const socialLinks = page.locator('footer a[target="_blank"]');
    await expect(socialLinks.first()).toBeVisible();
  });

  test('footer shows copyright text', async ({ page }) => {
    await expect(page.getByText(/Powered by NextJS/)).toBeVisible();
  });
});
