import { Page, Locator } from "@playwright/test";

export class LoginPage {
  page: Page;
  userName: Locator;
  password: Locator;
  loginBtn: Locator;
  errorMessage: Locator;
  productsLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
    this.productsLabel = page.getByText("Products");
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async visit() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async fillInForm(userName: string, userPass: string): Promise<void> {
    await this.userName.fill(userName);
    await this.password.fill(userPass);
    await this.loginBtn.click();
  }
}
