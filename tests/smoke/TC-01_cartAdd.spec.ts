import { test, expect } from '../../fixtures/pages.fixtures';
import { TEST_DATA } from '../../constants/messages';

test.describe('Cart - smoke', () => {
  test('TC-CART-01: product can be added to the cart', async ({ inventoryPage }) => {
    await inventoryPage.addToCart(TEST_DATA.PRODUCT_SLUG);

    await expect(inventoryPage.cartBadge).toHaveText(TEST_DATA.SINGLE_ITEM_COUNT);
  });
});