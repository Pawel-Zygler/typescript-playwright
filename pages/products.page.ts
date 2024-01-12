import { Page, Locator, expect } from "@playwright/test";
import ProductPage from "./product.page";
import CartPage from "./cart.page";
import CheckoutOverviewPage from "./checkoutOverview.page";
import CheckoutYourInformationPage from "./checkoutYourInformation.page copy";
import { faker } from "@faker-js/faker";

export class ProductsPage {
  page: Page;
  productPage: ProductPage;
  checkoutYourInformationPage: CheckoutYourInformationPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  cartPage: CartPage;
  products: Locator;
  sortDropdown: Locator;
  cartIcon: Locator;
  cart: Locator;
  backpack: Locator;
  productDescription: Locator;
  itemCost: Locator;
  subtotalPrice: Locator;
  tax: Locator;
  totalPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productPage = new ProductPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutYourInformationPage = new CheckoutYourInformationPage(page);
    this.checkoutOverviewPage = new CheckoutOverviewPage(page);
    this.products = page.locator(".inventory_item_name");
    this.productDescription = page.locator(".inventory_item_desc");
    this.sortDropdown = page.locator(".product_sort_container");
    this.cartIcon = page.locator(".shopping_cart_badge");
    this.cart = page.locator("#shopping_cart_container a");
    this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.itemCost = page.locator(".inventory_item_price");
    this.subtotalPrice = page.locator(".summary_subtotal_label");
    this.tax = page.locator(".summary_tax_label");
    this.totalPrice = page.locator(".summary_total_label");
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

  async compareAllProductInfo() {
    const productTitles = await this.products.allInnerTexts();
    const productDescriptions = await this.productDescription.allInnerTexts();
    const productPrices = await this.itemCost.allInnerTexts();

    for (let i = 0; i < productTitles.length; i++) {
      await this.clickProduct(productTitles[i]);

      let singleProductTitle = await this.productPage.grabTitle();
      let singleProductDescription = await this.productPage.grabDescription();
      let singleProductPrice = await this.productPage.grabPrice();

      expect(singleProductTitle).toEqual(productTitles[i]);
      expect(singleProductDescription).toEqual(productDescriptions[i]);
      expect(singleProductPrice).toEqual(productPrices[i]);

      await this.productPage.clickBackToProducts();
    }
  }

  async getAllProductsPrices(): Promise<number> {
    const productPricesUnformatted = await this.itemCost.allTextContents();
    const itemPrices = productPricesUnformatted.map((item) => {
      let pricesWithoutDollar = item.replace("$", "");
      let pricewithoutDot = pricesWithoutDollar.replace(".", "");
      return parseInt(pricewithoutDot);
    });

    let result = 0;
    for (let i = 0; i < itemPrices.length; i++) {
      result = result + itemPrices[i];
    }
    return result;
  }

  async getSubtotalValue(): Promise<number> {
    const subtotalUnformatted = await this.subtotalPrice.textContent();
    let subtotalWithoutDollar = subtotalUnformatted.replace("Item total: $", "");
    let subtotalWithoutDot = subtotalWithoutDollar.replace(".", "");
    return parseInt(subtotalWithoutDot);
  }

  async getTaxValue(): Promise<number> {
    const taxUnformatted = await this.tax.textContent();
    let taxWithoutDollar = taxUnformatted.replace("Tax: $", "");
    let taxWithoutDot = taxWithoutDollar.replace(".", "");
    return parseInt(taxWithoutDot);
  }

  async getShopTOTAL(): Promise<number> {
    const taxUnshopTotalUnformatted = await this.totalPrice.textContent();
    let shopTotalWithoutDollar = taxUnshopTotalUnformatted.replace("Total: $", "");
    let shopTotalWithoutDot = shopTotalWithoutDollar.replace(".", "");
    return parseInt(shopTotalWithoutDot);
  }

  async addProductToCheckout(product: string) {
    await this.clickProduct(product);
    await this.productPage.addToCartBtn.click();
    await this.cart.click();
    await this.cartPage.checkoutBtn.click();
    //expect(this.checkoutYourInformationPage.firstName.isVisible());
    await this.checkoutYourInformationPage.fillInPersonalInfo(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.zipCode()
    );
    await this.checkoutYourInformationPage.continueBtn.click();
    await expect(this.checkoutOverviewPage.pageTitle).toHaveText("Checkout: Overview");
  }
}

export default ProductsPage;
