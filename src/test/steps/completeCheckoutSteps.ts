import { Given, When, Then, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { expect, Browser, Page, chromium } from "@playwright/test";
//import homePage from "../../pages/homePage";

let browser: Browser;
let page: Page;
const SauceLabsBikeLight = "Sauce Labs Bike Light";
const SauceLabsBackpack = "Sauce Labs Backpack";

BeforeAll(async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
});

AfterAll(async function () {
  await browser.close();
});

When("added a product to cart", async function () {
  // await page.waitForSelector(
  //   `xpath=//div[@class='inventory_item_name' and contains(text(), 'Sauce Labs Bike Light')]`
  // );

  // await page
  //   .locator(
  //     `//div[@class='inventory_item_name' and contains(text(), 'Sauce Labs Bike Light')]`
  //   )
  //   .click();

  // const product = page.getByText("Sauce Labs Backpack");

  // await product.click();

  // await page.locator("text=Sauce Labs Bike Light").click();

  await page.locator("//button[contains(@class, 'btn_primary')]").click();
});

When("goes to cart", async function () {
  await page.locator("//a[contains(@class, 'shopping_cart_link')]").click();
});
