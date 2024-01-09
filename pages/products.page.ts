import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  page: Page;
  products: Locator;
  sortDropdown: Locator;
  cartIcon: Locator;
  cart: Locator;
  backpack: Locator;
  produtDescription: Locator;
  productValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator(".inventory_item_name");
    this.produtDescription = page.locator(".inventory_item_desc");
    this.sortDropdown = page.locator(".product_sort_container");
    this.cartIcon = page.locator(".shopping_cart_badge");
    this.cart = page.locator("#shopping_cart_container a");
    this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.productValue = page.locator(".inventory_item_price");
  }

  async itemNameToLocatorName(itemName: string) {
    return `[data-test=add-to-cart-${itemName.toLowerCase().replace(/[^a-z0-9]/g, "-")}]`;
  }

  async sortAZ() {
    await this.page.selectOption(".product_sort_container", "az");
  }

  async sortZA() {
    await this.page.selectOption(".product_sort_container", "za");
  }

  async sortPriceLoHi() {
    await this.page.selectOption(".product_sort_container", "lohi");
  }

  async sortPriceHiLo() {
    await this.page.selectOption(".product_sort_container", "hilo");
  }

  async clickProduct(productName: string): Promise<void> {
    for (let i = 0; i < (await this.products.count()); i++) {
      if ((await this.products.nth(i).textContent()) == productName) {
        await this.products.nth(i).click();
      }
    }
  }
}

export default ProductsPage;
