import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData";

test.describe("Browsing products", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();

    await loginPage.loginUser(
      testData.userStandard.username,
      testData.userStandard.password
    );
  });

  test.skip("checks if title, description, price is same on product and single product page", async ({
    productsPage,
    productPage,
    loginPage,
    cartPage,
  }) => {
    //clicks produkt
    //use this in for
    //await productsPage.clickProduct("Sauce Labs Backpack");
    // const productTitles = await productsPage.products.allInnerTexts();
    // for (let title of productTitles) {
    //   productsPage.clickProduct(title);
    //   let itemInfo = await productPage.grabInfo();
    //   console.log(itemInfo);
    // }
    //go to products, get titles, desc and prices
    //
    //go to single products
    //get title, desc and price
    //assert the same content, length
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
    const pricesOfItems = await productsPage.productValue.allTextContents();
    await productsPage.sortPriceHiLo();
    await productsPage.sortPriceLoHi();
    const currentOrderOfItmes = await productsPage.products.allTextContents();
    const sortedPricesOfItems = await productsPage.productValue.allTextContents();
    await expect(orderOfItems).toEqual(currentOrderOfItmes);

    await expect(pricesOfItems).toEqual(sortedPricesOfItems);
  });
});
