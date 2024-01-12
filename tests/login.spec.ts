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

  for (const user of testData.localeUsers) {
    test(`@smoke logs ${user.username} in and out`, async ({ loginPage, homePage }) => {
      await loginPage.fillInForm(user.username, user.password);

      await homePage.hamburgerMenu.click();
      await homePage.logoutBtn.click();
      await expect(loginPage.loginBtn).toBeVisible();
    });
  }
});
