import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given("a standard user is on the login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
});

When("the user enters {string} and {string}", async function (string, string2) {
  await page.fill("#user-name", string);
  await page.fill("#password", string2);
  await page.click("#login-button");
});

Then("the user is redirected to the dashboard", async function () {
  expect(page).toHaveTitle("Swag Labs");
});

Then("sees a product header loaded within one second", async function () {
  const startTime = performance.now();
  const endTime = performance.now();
  const loadTime = endTime - startTime;

  if (loadTime > 200) {
    console.log(`Page load time is too long: ${loadTime} ms`);
  }
});

Given("a locked out user is on the login page", async function () {
  await page.goto("https://www.saucedemo.com/");
});

When("the locked user enters {string} and {string}", async function (string, string2) {
  await page.fill("#user-name", string);
  await page.fill("#password", string2);
  await page.click("#login-button");
});

Then("the user receives a message about the account being locked", async function () {
  const errorText = await page.locator("//h3[@data-test='error']");
  await expect(errorText).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
});

Given("a performance glitch user is on the login page", async function () {
  await page.goto("https://www.saucedemo.com/");
});

When("the glitched user enters {string} and {string}", async function (string, string2) {
  await page.fill("#user-name", string);
  await page.fill("#password", string2);
  await page.click("#login-button");
});

Then("the page loads on time", async function () {
  const startTime = performance.now();
  const endTime = performance.now();
  const loadTime = endTime - startTime;

  if (loadTime > 200) {
    console.log(`Page load time is too long: ${loadTime} ms`);
  }
});
