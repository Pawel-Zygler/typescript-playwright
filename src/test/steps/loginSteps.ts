import { Given, When, Then, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { expect, Browser, Page, chromium } from "@playwright/test";
//import { globals } from "../../../types/globals";

let browser: Browser;
let page: Page;

BeforeAll(async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
});

AfterAll(async function () {
  await browser.close();
});

Given("a user is on the login page", async function () {
  await page.goto("https://www.saucedemo.com/");
});

When("enters {string} and {string}", async function (username, password) {
  await page.fill("#user-name", username);
  await page.fill("#password", password);
  await page.click("#login-button");
});

Then("the user is redirected to the dashboard", async function () {
  await expect(page).toHaveTitle("Swag Labs");
});
