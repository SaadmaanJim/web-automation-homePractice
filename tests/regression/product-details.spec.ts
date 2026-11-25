import { test, expect } from '../../fixtures/pages.fixtures';
import { PRODUCTS, ROUTES } from '../../constants/messages';

test.describe('Product details - regression', () => {
  test('TC-PRD-01: details page shows the correct product information', async ({
    page,
    inventoryPage,
    productDetailsPage,
  }) => {
    await inventoryPage.openProductDetail(PRODUCTS.BACKPACK_ID);

    await expect(page).toHaveURL(/inventory-item\.html/); //recieving problem

    await expect(productDetailsPage.name).toHaveText(PRODUCTS.BACKPACK_NAME); 
    await expect(productDetailsPage.price).toHaveText(PRODUCTS.BACKPACK_PRICE);
    await expect(productDetailsPage.description).toBeVisible();
    await expect(productDetailsPage.image).toBeVisible();
  });

  test('TC-PRD-02: product can be added to the cart from the details page', async ({
    page,
    inventoryPage,
    productDetailsPage,
  }) => {
    await inventoryPage.openProductDetail(PRODUCTS.BACKPACK_ID);

    await productDetailsPage.addToCart();

    await expect(productDetailsPage.cartBadge).toHaveText('1');
  });

  test('TC-PRD-03: back to products returns to the inventory page', async ({
    page,
    inventoryPage,
    productDetailsPage,
  }) => {
    await inventoryPage.openProductDetail(PRODUCTS.BACKPACK_ID);

    await productDetailsPage.backToProducts();

    await expect(page).toHaveURL(ROUTES.INVENTORY);
    await expect(inventoryPage.inventoryList).toBeVisible();
  });
});