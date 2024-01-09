import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData";

test.describe("Login", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });

  test("goes to login page", async ({ loginPage, page }) => {
    await expect(page).toHaveTitle("Swag Labs");
  });

  test("logs standard user in", async ({ loginPage }) => {
    await loginPage.fillInForm(
      testData.userStandard.username,
      testData.userStandard.password
    );
    await console.log(`heheheh` + loginPage.productsLabel);
    await expect(loginPage.productsLabel).toBeVisible();
    await expect(loginPage.productsLabel).toHaveText("Products");
  });

  test("does not le log in", async ({ loginPage }) => {
    await loginPage.fillInForm(
      testData.userLocked.username,
      testData.userLocked.password
    );
    await console.log(`heheheh` + loginPage.productsLabel);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
