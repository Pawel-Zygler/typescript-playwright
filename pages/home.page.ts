import { Page, Locator } from "@playwright/test";

export class HomePage {
  page: Page;
  hamburgerMenu: Locator;
  allItemsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hamburgerMenu = page.locator(".bm-burger-button");
    this.allItemsLink = page.locator("#inventory_sidebar_link");
  }
}

export default HomePage;
