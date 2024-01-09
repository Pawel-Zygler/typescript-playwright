import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  page: Page;
  products: Locator;
  sortDropdown: Locator;
  cartIcon: Locator;
  cart: Locator;
  backpack: Locator;
  produtDescription: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator(".inventory_item_name");
    this.produtDescription = page.locator(".inventory_item_desc");
    this.sortDropdown = page.locator(".product_sort_container");
    this.cartIcon = page.locator(".shopping_cart_badge");
    this.cart = page.locator("#shopping_cart_container a");
    this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
}

export default ProductsPage;
