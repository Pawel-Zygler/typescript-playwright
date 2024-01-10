import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  page: Page;
  username: Locator;
  password: Locator;
  loginBtn: Locator;
  errorMessage: Locator;
  productsLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
    this.productsLabel = page.getByText("Products");
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async visit() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async fillInForm(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async loginUser(username: string, password: string): Promise<void> {
    this.fillInForm(username, password);

    await expect(this.productsLabel).toBeVisible();
    await expect(this.productsLabel).toHaveText("Products");
  }
}

export default LoginPage;
