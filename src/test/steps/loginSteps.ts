import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given("a user is on the login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
});

When("enters {string} annd {string}", async function (string, string2) {
  await page.fill("#user-name", string);
  await page.fill("#password", string2);
  await page.click("#login-button");
});

Then("the user is redirected to the dashboard", async function () {
  expect(page).toHaveTitle("Swag Labs");
});
