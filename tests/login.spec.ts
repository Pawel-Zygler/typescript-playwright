import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData";

test.describe("Login", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });

  test("@smoke goes to login page", async ({ loginPage, page }) => {
    await expect(page).toHaveTitle("Swag Labs");
  });

  test("@smoke logs standard user in", async ({ loginPage }) => {
    await loginPage.fillInForm(
      testData.userStandard.username,
      testData.userStandard.password
    );

    await expect(loginPage.productsLabel).toBeVisible();
    await expect(loginPage.productsLabel).toHaveText("Products");
  });

  test("@smoke does not let log in", async ({ loginPage }) => {
    await loginPage.fillInForm(
      testData.userLocked.username,
      testData.userLocked.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
