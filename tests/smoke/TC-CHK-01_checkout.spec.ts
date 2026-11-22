import { test, expect } from '../../fixtures/pages.fixtures';
import { CHECKOUT_DATA, CONFIRMATION_TEXT, TEST_DATA } from '../../constants/messages';

test.describe('Checkout - smoke', () => {
  test('TC-CHK-01: user can complete a checkout', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
  }) => {
    await inventoryPage.addToCart(TEST_DATA.PRODUCT_SLUG);
    await inventoryPage.openCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.fillInformation(
      CHECKOUT_DATA.FIRST_NAME,
      CHECKOUT_DATA.LAST_NAME,
      CHECKOUT_DATA.POSTAL_CODE,
    );
    await checkoutPage.continue();
    await checkoutPage.finish();

    await expect(checkoutPage.confirmation).toContainText(CONFIRMATION_TEXT);
  });
});