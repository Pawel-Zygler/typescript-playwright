import { test as base } from "@playwright/test";
import { LoginPage } from "./pages/login.page";
import { CheckoutOverviewPage } from "./pages/checkoutOverview.page";
import { CheckoutYourInformationPage } from "./pages/checkoutYourInformation.page copy";
import { ProductsPage } from "./pages/products.page";
import { CartPage } from "./pages/cart.page";
import { ProductPage } from "./pages/product.page";

type pageObjectClass = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  checkoutYourInformationPage: CheckoutYourInformationPage;
  cartPage: CartPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  productPage: ProductPage;
};

export const test = base.extend<pageObjectClass>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  checkoutYourInformationPage: async ({ page }, use) => {
    await use(new CheckoutYourInformationPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
});
