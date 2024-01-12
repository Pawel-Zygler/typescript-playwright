import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData.json";

test.describe("Checkout - e2e solution", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();

    await loginPage.loginUser(
      testData.users.userStandard.username,
      testData.users.userStandard.password
    );
  });
  test("@regression completes checkout", async ({
    productsPage,
    checkoutOverviewPage,
  }) => {
    await productsPage.addProductToCheckout(testData.products.productOne.name);
    await checkoutOverviewPage.finishBtn.click();
    await expect(checkoutOverviewPage.orderSuccessMsg).toHaveText(
      "Thank you for your order!"
    );
  });

  test("@regression asserts shop counting is correct counting of prices", async ({
    productsPage,
    homePage,
  }) => {
    await productsPage.addProductToCheckout(testData.products.productOne.name);
    const initialItemPricesInCart = await productsPage.getAllProductsPrices();
    const initailSubtotalValue = await productsPage.getSubtotalValue();
    await expect(initialItemPricesInCart).toEqual(initailSubtotalValue);

    await homePage.hamburgerMenu.click();
    await homePage.allItemsLink.click();
    await productsPage.sortAZ();
    await productsPage.sortZA();
    await productsPage.sortAZ();

    await productsPage.addProductToCheckout(testData.products.productTwo.name);
    const finalItemPricesInCart = await productsPage.getAllProductsPrices();
    const finalSubtotalValue = await productsPage.getSubtotalValue();
    await expect(finalItemPricesInCart).toEqual(finalSubtotalValue);

    const finalTaxValue = await productsPage.getTaxValue();
    const myTOTALcount = finalItemPricesInCart + finalTaxValue;
    const shopTOTALcount = await productsPage.getShopTOTAL();
    await expect(myTOTALcount).toEqual(shopTOTALcount);
  });
});
