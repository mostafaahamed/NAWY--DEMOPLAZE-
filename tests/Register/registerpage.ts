import { Page, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async openSignupForm() {
    await this.page.getByRole('link', { name: 'Sign up' }).click();
  }

  async fillSignupForm(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Username:' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password:' }).fill(password);
  }

  async submitAndVerifyDialog(expectedMessage: string) {
    this.page.once('dialog', async (dialog) => {
      const message = dialog.message();
      console.log(`Dialog message: ${message}`);
      expect(message).toContain(expectedMessage);
      await dialog.accept();
    });

    await this.page.getByRole('button', { name: 'Sign up' }).click();
  }
}
