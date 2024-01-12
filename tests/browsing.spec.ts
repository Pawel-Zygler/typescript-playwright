import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData.json";

test.describe("Browsing", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();

    await loginPage.loginUser(
      testData.users.userStandard.username,
      testData.users.userStandard.password
    );
  });

  test("@regression checks if title, description, price is same on product and single product page", async ({
    productsPage,
  }) => {
    await productsPage.compareAllProductInfo();
  });

  test("verifies az / za sorting sorting functionality", async ({ productsPage }) => {
    await productsPage.sortAZ();
    const orderOfItems = await productsPage.products.allTextContents();
    await productsPage.sortZA();
    await productsPage.sortAZ();
    const currentOrderOfItmes = await productsPage.products.allTextContents();
    await expect(orderOfItems).toEqual(currentOrderOfItmes);

    const sortedCurrentOrderOfItems = await currentOrderOfItmes.sort();
    await expect(sortedCurrentOrderOfItems).toEqual(currentOrderOfItmes);
  });

  test("verifies 'lohi' and 'hilo' price sorting sorting functionality", async ({
    productsPage,
  }) => {
    await productsPage.sortPriceLoHi();
    const orderOfItems = await productsPage.products.allTextContents();
    const pricesOfItems = await productsPage.itemCost.allTextContents();
    await productsPage.sortPriceHiLo();
    await productsPage.sortPriceLoHi();
    const currentOrderOfItmes = await productsPage.products.allTextContents();
    const sortedPricesOfItems = await productsPage.itemCost.allTextContents();

    await expect(orderOfItems).toEqual(currentOrderOfItmes);

    await expect(pricesOfItems).toEqual(sortedPricesOfItems);
  });
});
