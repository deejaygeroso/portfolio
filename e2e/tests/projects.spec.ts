import { expect, test } from '@playwright/test';

test.describe('Projects Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#Projects').scrollIntoViewIfNeeded();
  });

  test('projects section heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  });

  test('at least one project card is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'My Role' }).first()).toBeVisible();
  });

  test('"My Role" button opens ProjectRoleModal', async ({ page }) => {
    await page.getByRole('button', { name: 'My Role' }).first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('ProjectRoleModal closes on Escape', async ({ page }) => {
    await page.getByRole('button', { name: 'My Role' }).first().click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('"Team" button opens TeamMembersModal', async ({ page }) => {
    await page.getByRole('button', { name: 'Team' }).first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('TeamMembersModal closes on Escape', async ({ page }) => {
    await page.getByRole('button', { name: 'Team' }).first().click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });
});
