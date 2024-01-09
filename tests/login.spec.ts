import { expect } from "@playwright/test";
import { test } from "../initialisations";
import testData from "../data/testData";

test.describe("Login", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });

  test("go to login page", async ({ loginPage, page }) => {
    await expect(page).toHaveTitle("Swag Labs");
  });

  test("login ok", async ({ loginPage }) => {
    await loginPage.fillInForm(
      testData.userStandard.username,
      testData.userStandard.password
    );
    await console.log(`heheheh` + loginPage.productsLabel);
    await expect(loginPage.productsLabel).toBeVisible();
    await expect(loginPage.productsLabel).toHaveText("Products");
  });

  test("login invalid", async ({ page }) => {});
});
