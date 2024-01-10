import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData";

test.describe("Checkout", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();

    await loginPage.loginUser(
      testData.userStandard.username,
      testData.userStandard.password
    );
  });
  test("@regression completes checkout", async ({
    productsPage,
    checkoutOverviewPage,
  }) => {
    await productsPage.addProductToCheckout(testData.productOne.name);
    await checkoutOverviewPage.finishBtn.click();
    await expect(checkoutOverviewPage.orderSuccessMsg).toHaveText(
      "Thank you for your order!"
    );
  });

  test.skip("asserts cart total, sorts az & za, adds to cart one more product, goes to checkout and asserts total", async ({
    productsPage,
    homePage,
  }) => {
    await productsPage.addProductToCheckout(testData.productOne.name);

    //save price of checkout at start
    const totalAtStart = await productsPage.getPrice();
    await console.log(prices);
    await homePage.hamburgerMenu.click();
    await homePage.allItemsLink.click();
    await productsPage.sortAZ();
    await productsPage.sortZA();
    await productsPage.sortAZ();
    await await productsPage.addProductToCheckout(testData.productTwo.name);
    const totalAfterUpdate = productsPage;
    expect(totalAfterUpdate).toNotBeLongerThan2DecimalPlaces();

    //check prices from start
  });
});

// Scenario: Update cart and sort
// Given <UserType> is in checkout overview with item total cost
// When goes back to all products
// When sorts all products differently to actual state
// When adds another product
// When goes back to checkout overview
// Then the cart updates with additional product
// Then the price updates with additional amount
// Then the prices is correctly formatted
