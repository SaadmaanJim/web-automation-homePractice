import { test, expect } from '../../fixtures/pages.fixtures';
import { TEST_DATA } from '../../constants/messages';

test.describe('Cart - regression', () => {
  test('TC-CART-02: product can be removed from the cart', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.addToCart(TEST_DATA.PRODUCT_SLUG);
    await inventoryPage.openCart();

    await cartPage.removeItem(TEST_DATA.PRODUCT_SLUG);

    await expect(cartPage.cartItems).toHaveCount(0);
    await expect(inventoryPage.cartBadge).toBeHidden();
  });
});