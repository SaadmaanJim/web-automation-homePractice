import { test, expect } from '../../fixtures/pages.fixtures';
import { ROUTES } from '../../constants/messages';

test.describe('Auth - smoke', () => {
  test('TC-AUTH-01: logged in user can log out', async ({ page, inventoryPage, loginPage }) => {
    await inventoryPage.logout();

    await expect(page).toHaveURL(ROUTES.LOGIN);
    await expect(loginPage.loginButton).toBeVisible();
  });
});