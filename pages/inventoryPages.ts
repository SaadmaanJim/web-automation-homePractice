import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly inventoryList: Locator;
  readonly cartBadge: Locator;
  private readonly cartLink: Locator;
  private readonly menuButton: Locator;
  private readonly logoutLink: Locator;
  readonly itemNames:Locator;
  readonly itemPrices:Locator;
 private readonly sortDropdown:Locator;
                                                                                                                                                                          

  constructor(private readonly page: Page) {
    this.inventoryList = page.locator('[data-test="inventory-container"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    this.itemNames = page.locator('[data-test="inventory-item-name"]');
    this.itemPrices = page.locator('[data-test="inventory-item-price"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
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

  async sortBy(option:string):Promise<void>{
    await this.sortDropdown.selectOption(option);
  }

 async getItemNames(): Promise<string[]> {
    await this.itemNames.first().waitFor();
    return this.itemNames.allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    await this.itemPrices.first().waitFor();
    const pricesText = await this.itemPrices.allTextContents();
    return pricesText.map(price => parseFloat(price.replace('$', '')));
  }

  async openProductDetail(productId: number): Promise<void> {
  await this.page.locator(`[data-test="item-${productId}-title-link"]`).click();
}
  }

