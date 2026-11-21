import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly inventoryList: Locator;
  readonly cartBadge: Locator;
  private readonly cartLink: Locator;
  private readonly menuButton: Locator;
  private readonly logoutLink: Locator;

  constructor(private readonly page: Page) {
    this.inventoryList = page.locator('[data-test="inventory-container"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
  }

  async addToCart(productSlug: string): Promise<void> {
    await this.page.locator(`[data-test="add-to-cart-${productSlug}"]`).click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async logout(): Promise<void> {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}