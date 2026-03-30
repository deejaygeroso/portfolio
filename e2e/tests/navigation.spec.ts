import { expect, test } from '@playwright/test';

test.describe('Navigation - Desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('desktop navbar is visible', async ({ page }) => {
    const navbar = page.getByRole('banner');
    await expect(navbar).toBeVisible();
  });

  test('desktop navbar links scroll to correct sections', async ({ page }) => {
    await page.getByRole('button', { name: 'About' }).click();
    await expect(page.locator('#About')).toBeInViewport();

    await page.getByRole('button', { name: 'Projects' }).click();
    await expect(page.locator('#Projects')).toBeInViewport();

    await page.getByRole('button', { name: 'Testimonials' }).click();
    await expect(page.locator('#Testimonials')).toBeInViewport();

    await page.getByRole('button', { name: 'Contact' }).click();
    await expect(page.locator('#Footer')).toBeInViewport();
  });
});

test.describe('Navigation - Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('bottom nav is visible on mobile viewport', async ({ page }) => {
    const bottomNav = page.getByRole('navigation', { name: 'Site navigation' });
    await expect(bottomNav).toBeVisible();
  });

  test('bottom nav items scroll to correct sections on mobile', async ({ page }) => {
    const bottomNav = page.getByRole('navigation', { name: 'Site navigation' });
    await bottomNav.getByRole('button', { name: 'About' }).click();
    await expect(page.locator('#About')).toBeInViewport();

    await bottomNav.getByRole('button', { name: 'Projects' }).click();
    await expect(page.locator('#Projects')).toBeInViewport();
  });
});
