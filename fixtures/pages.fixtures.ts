import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPages';
import { InventoryPage } from '../pages/inventoryPages';
import { CartPage } from '../pages/cartPages';
import { getEnv } from '../utils/env';
import { CheckoutPage } from '../pages/checkOut';
import { ProductDetailsPage } from '../pages/productDetailsPage';
type Pages = {
  inventoryPage: InventoryPage; 
  cartPage: CartPage;
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
  productDetailsPage: ProductDetailsPage;
};

export const test = base.extend<Pages>({
  inventoryPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(getEnv('STANDARD_USER'), getEnv('USER_PASSWORD'));
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  }

});

export { expect } from '@playwright/test';