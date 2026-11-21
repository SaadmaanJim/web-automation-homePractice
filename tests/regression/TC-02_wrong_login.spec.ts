import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPages';
import { ERROR_MESSAGES, ROUTES, TEST_DATA } from '../../constants/messages';
import { getEnv } from '../../utils/env';

test.describe('Login - negative scenarios', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test('TC-LOGIN-02: wrong password shows an error and blocks login', async ({ page }) => {
    await loginPage.login(getEnv('STANDARD_USER'), TEST_DATA.WRONG_PASSWORD);

    await expect(loginPage.errorMessage).toContainText(ERROR_MESSAGES.INVALID_CREDENTIALS);
    await expect(page).toHaveURL(ROUTES.LOGIN);
  });

  test('TC-LOGIN-03: locked out user cannot log in', async ({ page }) => {
    await loginPage.login(getEnv('LOCKED_USER'), getEnv('USER_PASSWORD'));

    await expect(loginPage.errorMessage).toContainText(ERROR_MESSAGES.LOCKED_OUT);
    await expect(page).toHaveURL(ROUTES.LOGIN);
  });

  test('TC-LOGIN-04: empty username shows a validation error', async ({ page }) => {
    await loginPage.login('', getEnv('USER_PASSWORD'));

    await expect(loginPage.errorMessage).toContainText(ERROR_MESSAGES.USERNAME_REQUIRED);
    await expect(page).toHaveURL(ROUTES.LOGIN);
  });

  test('TC-LOGIN-05: empty password shows a validation error', async ({ page }) => {
    await loginPage.login(getEnv('STANDARD_USER'), '');

    await expect(loginPage.errorMessage).toContainText(ERROR_MESSAGES.PASSWORD_REQUIRED);
    await expect(page).toHaveURL(ROUTES.LOGIN);
  });

});