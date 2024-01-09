import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData";
import { faker } from "@faker-js/faker";

test.describe("Checkout", () => {
  test("@regression completes checkout", async ({
    productsPage,
    loginPage,
    cartPage,
    checkoutYourInformationPage,
    checkoutOverviewPage,
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

    await cartPage.checkoutBtn.click();
    await checkoutYourInformationPage.fillInPersonalInfo(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.zipCode()
    );
    await checkoutYourInformationPage.continueBtn.click();

    await expect(checkoutOverviewPage.pageTitle).toHaveText("Checkout: Overview");

    await expect(cartPage.products).toHaveText("Sauce Labs Backpack");

    await checkoutOverviewPage.finishBtn.click();
  });
});
