import { Page, Locator } from "@playwright/test";

export class CheckoutOveriewPage {
  page: Page;
  pageTitle: Locator;
  products: Locator;
  finishBtn: Locator;
  orderSuccessScreen: Locator;
  itemPrice: Locator;
  subtotal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(".subheader");
    this.finishBtn = page.locator('a[href*="checkout-complete.html"]');
    this.orderSuccessScreen = page.locator(".checkout_complete_container h2");
    this.itemPrice = page.locator(".inventory_item_price");
    this.subtotal = page.locator(".summary_subtotal_label");
  }
}
