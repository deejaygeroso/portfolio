import { expect, test } from '@playwright/test';

test.describe('Testimonials Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#Testimonials').scrollIntoViewIfNeeded();
  });

  test('testimonials section is visible', async ({ page }) => {
    await expect(page.locator('#Testimonials')).toBeVisible();
  });

  test('"Testimonials" heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Testimonials' })).toBeVisible();
  });

  test('at least one testimonial card is visible', async ({ page }) => {
    const headings = page.getByRole('heading', { level: 3 });
    await expect(headings.first()).toBeVisible();
  });
});
