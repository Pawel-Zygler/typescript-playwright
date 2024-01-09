import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData";

test.describe("Remove item", () => {
  test("adds and removes product from cart", async ({
    productsPage,
    loginPage,
    cartPage,
  }) => {
    await loginPage.visit();

    await loginPage.loginUser(
      testData.userStandard.username,
      testData.userStandard.password
    );

    await productsPage.backpack.click();

    await expect(productsPage.cartIcon).toHaveText("1");

    await productsPage.cart.click();

    await expect(cartPage.products).toHaveText("Sauce Labs Backpack");

    await cartPage.removeBtn.click();

    await expect(productsPage.cartIcon).not.toBeVisible();
    await expect(cartPage.products).not.toBeVisible();
  });
});
