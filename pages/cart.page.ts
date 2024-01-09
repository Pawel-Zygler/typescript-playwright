import { Page, Locator } from "@playwright/test";

export class CartPage {
  page: Page;
  products: Locator;
  checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator(".inventory_item_name");
    this.checkoutBtn = page.locator('[data-test="checkout"]');
  }
}

export default CartPage;
