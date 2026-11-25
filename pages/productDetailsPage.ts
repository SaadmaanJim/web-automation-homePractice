import { Locator, Page } from '@playwright/test';

export class ProductDetailsPage {
  readonly name: Locator;
  readonly price: Locator;
  readonly description: Locator;
  readonly image: Locator;
  readonly cartBadge: Locator;
  private readonly addToCartButton: Locator;
  private readonly backToProductsButton: Locator;

  constructor(page: Page) {
    this.name = page.locator('[data-test="inventory-item-name"]');
    this.price = page.locator('[data-test="inventory-item-price"]');
    this.description = page.locator('[data-test="inventory-item-desc"]');
    this.image = page.locator('[data-test="item-sauce-labs-backpack-img"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async backToProducts(): Promise<void> {
    await this.backToProductsButton.click();
  }
}