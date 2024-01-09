import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  page: Page;
  pageTitle: Locator;
  sortDropdown: Locator;
  addToCartBtn: Locator;
  removeItemBtn: Locator;
  products: Locator;
  itemPrice: Locator;
  cartIcon: Locator;
  cart: Locator;
  backpack: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(".product_label");
    this.sortDropdown = page.locator(".product_sort_container");
    this.products = page.locator(".inventory_item_name");
    this.addToCartBtn = page.getByRole("button", { name: "ADD TO CART" });
    this.removeItemBtn = page.getByRole("button", { name: "REMOVE" });
    this.itemPrice = page.locator(".inventory_item_price");
    this.cartIcon = page.locator(".shopping_cart_badge");
    this.cart = page.locator("#shopping_cart_container a");
    this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
}

export default ProductsPage;
