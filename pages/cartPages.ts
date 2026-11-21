import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly cartItems: Locator;

  constructor(private readonly page: Page) {
    this.cartItems = page.locator('[data-test="inventory-item"]');
  }

  async removeItem(productSlug: string): Promise<void> {
    await this.page.locator(`[data-test="remove-${productSlug}"]`).click();
  }
}