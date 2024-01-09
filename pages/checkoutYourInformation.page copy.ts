import { Page, Locator } from "@playwright/test";

export class CheckoutYourInformationPage {
  page: Page;
  firstName: Locator;
  lastName: Locator;
  zipCode: Locator;
  continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.zipCode = page.locator("#postal-code");
    this.continueBtn = page.getByRole("button", { name: "CONTINUE" });
  }

  async fillInPersonalInfo(
    firstName: string,
    lastName: string,
    zipCode: string
  ): Promise<void> {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
  }
}

export default CheckoutYourInformationPage;
