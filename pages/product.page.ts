import { Page, Locator } from "@playwright/test";

export class ProductPage {
  page: Page;
  productTitle: Locator;
  productDescription: Locator;
  productPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator(".inventory_details_name");
    this.productDescription = page.locator(".inventory_details_desc");
    this.productPrice = page.locator(".inventory_details_price");
  }

  async grabTitle() {
    await this.productTitle.innerText();
  }

  async grabDesc() {
    await this.productDescription.innerText();
  }

  async grabPrice() {
    await this.productPrice.innerText();
  }

  async grabInfo() {
    this.grabTitle();
    this.grabDesc();
    this.grabPrice();
  }
}

export default ProductPage;
