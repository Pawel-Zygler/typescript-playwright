import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData.json";

test.describe("Login", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });

  test("@smoke goes to login page", async ({ loginPage, page }) => {
    await expect(page).toHaveTitle("Swag Labs");
  });

  test("@smoke logs standard user in", async ({ loginPage }) => {
    await loginPage.fillInForm(
      testData.users.userStandard.username,
      testData.users.userStandard.password
    );

    await expect(loginPage.productsLabel).toBeVisible();
    await expect(loginPage.productsLabel).toHaveText("Products");
  });

  test("@smoke does not let log in", async ({ loginPage }) => {
    await loginPage.fillInForm(
      testData.users.userLocked.username,
      testData.users.userLocked.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
