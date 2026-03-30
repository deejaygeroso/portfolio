import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('desktop navbar is visible', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const navbar = page.getByRole('banner');
    await expect(navbar).toBeVisible();
  });

  test('desktop navbar links scroll to correct sections', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });

    await page.getByRole('button', { name: 'About' }).click();
    await expect(page.locator('#About')).toBeInViewport();

    await page.getByRole('button', { name: 'Projects' }).click();
    await expect(page.locator('#Projects')).toBeInViewport();

    await page.getByRole('button', { name: 'Testimonials' }).click();
    await expect(page.locator('#Testimonials')).toBeInViewport();

    await page.getByRole('button', { name: 'Contact' }).click();
    await expect(page.locator('#Footer')).toBeInViewport();
  });

  test('bottom nav is visible on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const bottomNav = page.getByRole('navigation', { name: 'Site navigation' });
    await expect(bottomNav).toBeVisible();
  });

  test('bottom nav items scroll to correct sections on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await page.getByRole('button', { name: 'About' }).first().click();
    await expect(page.locator('#About')).toBeInViewport();

    await page.getByRole('button', { name: 'Projects' }).first().click();
    await expect(page.locator('#Projects')).toBeInViewport();
  });
});
