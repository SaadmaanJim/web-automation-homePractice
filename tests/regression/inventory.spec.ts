import { test, expect } from '../../fixtures/pages.fixtures';
import { EXPECTED_PRODUCT_COUNT, SORT_OPTIONS } from '../../constants/messages';

test.describe('Inventory - regression', () => {
  test('TC-INV-01: inventory page lists all products', async ({ inventoryPage }) => {
    await expect(inventoryPage.itemNames).toHaveCount(EXPECTED_PRODUCT_COUNT);
    await expect(inventoryPage.itemPrices).toHaveCount(EXPECTED_PRODUCT_COUNT);
  });

  test('TC-INV-02: products can be sorted by name A to Z', async ({ inventoryPage }) => {
    const names = await inventoryPage.getItemNames();
    const expectedOrder = [...names].sort();

   
    await inventoryPage.sortBy(SORT_OPTIONS.NAME_DESC);
    await inventoryPage.sortBy(SORT_OPTIONS.NAME_ASC);

    await expect.poll(() => inventoryPage.getItemNames()).toEqual(expectedOrder);
  });

  test('TC-INV-03: products can be sorted by name Z to A', async ({ inventoryPage }) => {
    const names = await inventoryPage.getItemNames();
    const expectedOrder = [...names].sort().reverse();

    await inventoryPage.sortBy(SORT_OPTIONS.NAME_DESC);

    await expect.poll(() => inventoryPage.getItemNames()).toEqual(expectedOrder);
  });

  test('TC-INV-04: products can be sorted by price low to high', async ({ inventoryPage }) => {
    const prices = await inventoryPage.getItemPrices();
    const expectedOrder = [...prices].sort((a, b) => a - b);

    await inventoryPage.sortBy(SORT_OPTIONS.PRICE_ASC);

    await expect.poll(() => inventoryPage.getItemPrices()).toEqual(expectedOrder);
  });

  test('TC-INV-05: products can be sorted by price high to low', async ({ inventoryPage }) => {
    const prices = await inventoryPage.getItemPrices();
    const expectedOrder = [...prices].sort((a, b) => b - a);

    await inventoryPage.sortBy(SORT_OPTIONS.PRICE_DESC);

    await expect.poll(() => inventoryPage.getItemPrices()).toEqual(expectedOrder);
  });
});