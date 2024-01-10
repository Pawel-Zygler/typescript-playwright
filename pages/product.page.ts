import { Page, Locator } from "@playwright/test";

export class ProductPage {
  page: Page;
  productTitle: Locator;
  productDescription: Locator;
  productPrice: Locator;
  backBtn: Locator;
  addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator(".inventory_details_name");
    this.productDescription = page.locator(".inventory_details_desc");
    this.productPrice = page.locator(".inventory_details_price");
    this.backBtn = page.locator(".inventory_details_back_button");
    this.addToCartBtn = page.locator(".btn_primary");
  }

  async grabTitle() {
    return await this.productTitle.textContent();
  }

  async grabDescription() {
    return await this.productDescription.textContent();
  }

  async grabPrice() {
    return await this.productPrice.textContent();
  }

  async grabAllProductsInfoFromSingleProductPage() {
    const productTitles = await this.productTitle.allInnerTexts();
    console.log(productTitles);
    const productDescriptions = await this.productDescription.allInnerTexts();
    console.log(productDescriptions);
    const productPricesUnformatted = await this.productPrice.allTextContents();
    console.log(productPricesUnformatted);
  }

  async clickBackToProducts() {
    await this.backBtn.click();
  }
}

export default ProductPage;
