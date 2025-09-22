import { test, expect } from '@playwright/test';

test.describe('Dashboard Page Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Default button opens eCommerce page and shows correct label', async ({ page }) => {
    // Click the Default button in sidebar
    await page.click('button:has-text("Default")');

    // Wait for navigation to complete (Default goes to root)
    await page.waitForURL('/');

    // Verify URL is root path
    expect(page.url()).toMatch(/\/$/);

    // Verify the page label "eCommerce" is displayed (same content as eCommerce page)
    const pageLabel = page.locator('h1:has-text("eCommerce")');
    await expect(pageLabel).toBeVisible();
    await expect(pageLabel).toHaveText('eCommerce');
  });

  test('eCommerce button opens eCommerce page and shows correct label', async ({ page }) => {
    // Click the eCommerce button in sidebar
    await page.click('button:has-text("eCommerce")');

    // Wait for navigation to complete
    await page.waitForURL('**/ecommerce');

    // Verify URL contains /ecommerce
    expect(page.url()).toContain('/ecommerce');

    // Verify the page label "eCommerce" is displayed
    const pageLabel = page.locator('h1:has-text("eCommerce")');
    await expect(pageLabel).toBeVisible();
    await expect(pageLabel).toHaveText('eCommerce');
  });

  test('Order Lists page opens with button click and shows correct label', async ({ page }) => {
    // Click the Order Lists button in sidebar
    await page.click('button:has-text("Order Lists")');

    // Wait for navigation to complete
    await page.waitForURL('**/orders');

    // Verify URL contains /orders
    expect(page.url()).toContain('/orders');

    // Verify the page label "Order List" is displayed
    const pageLabel = page.locator('h1:has-text("Order List")');
    await expect(pageLabel).toBeVisible();
    await expect(pageLabel).toHaveText('Order List');
  });
});