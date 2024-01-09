import { Page, Locator } from "@playwright/test";

export class CheckoutOverviewPage {
  page: Page;
  pageTitle: Locator;
  finishBtn: Locator;
  orderSuccessMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText("Checkout: Overview");
    this.finishBtn = page.locator('[data-test="finish"]');
    this.orderSuccessMsg = page.getByRole("heading", {
      name: "Thank you for your order!",
    });
  }
}

export default CheckoutOverviewPage;
