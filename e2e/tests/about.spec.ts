import { expect, test } from '@playwright/test';

test.describe('About Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('about section is present in the DOM', async ({ page }) => {
    await expect(page.locator('#About')).toBeAttached();
  });

  test('"About Me" heading is visible after scrolling into view', async ({ page }) => {
    await page.locator('#About').scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
  });

  test('stats are visible', async ({ page }) => {
    await page.locator('#About').scrollIntoViewIfNeeded();
    await expect(page.getByText('Years Experience')).toBeVisible();
  });

  test('tech stack chips are visible', async ({ page }) => {
    await page.locator('#About').scrollIntoViewIfNeeded();
    const about = page.locator('#About');
    await expect(about.getByText('React', { exact: true })).toBeVisible();
    await expect(about.getByText('TypeScript', { exact: true })).toBeVisible();
  });
});
