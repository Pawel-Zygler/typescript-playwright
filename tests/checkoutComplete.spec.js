import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData";
import { faker } from "@faker-js/faker";

test.describe("Checkout", () => {
  test("completes checkout", async ({
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

// Scenario: Complete checkout e2e (as all users beside locked out user)
// Given <UserType> is on all products page
// When added a product to cart
// When goes to cart
// Then should see selected product in the cart
// When clicks Checkout should see checkout: your information form
// When submits personal data correctly by clicking Continue

// Then should see checkout overview page with selected product

// Then should see item prices are correct using price verification method
// When clicks Finish
// Then the order success screen is displayed
