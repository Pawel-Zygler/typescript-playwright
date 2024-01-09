import { Page, Locator } from "@playwright/test";

export class CartPage {
  page: Page;
  products: Locator;
  checkoutBtn: Locator;
  removeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator(".inventory_item_name");
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.removeBtn = page.getByRole("button", { name: "REMOVE" });
  }
}

export default CartPage;
