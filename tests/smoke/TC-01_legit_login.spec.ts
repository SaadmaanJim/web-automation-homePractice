import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPages';
import { InventoryPage } from '../../pages/inventoryPages';
import { ROUTES } from '../../constants/messages';
import { getEnv } from '../../utils/env';

test.describe('Login - smoke', () => {
  test('TC-LOGIN-01: valid user can log in and see the product list', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login(getEnv('STANDARD_USER'), getEnv('USER_PASSWORD'));

    await expect(page).toHaveURL(ROUTES.INVENTORY);
    await expect(inventoryPage.inventoryList).toBeVisible();
  });
});