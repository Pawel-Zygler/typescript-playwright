import { test as base } from "@playwright/test";
import { LoginPage } from "./pages/login.page";

import { CheckoutPage } from "./pages/checkout.page";

type pageObjectClass = {
  loginPage: LoginPage;

  checkoutPage: CheckoutPage;
};

export const test = base.extend<pageObjectClass>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});
