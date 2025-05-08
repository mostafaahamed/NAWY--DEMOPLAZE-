import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.demoblaze.com/', {
      timeout: 60000
    });
  }
  

  async openLoginForm() {
    await this.page.getByRole('link', { name: 'Log in' }).click();
  }

  async fillLoginForm(username: string, password: string) {
    await this.page.locator('#loginusername').fill(username);
    await this.page.locator('#loginpassword').fill(password);
  }

  async submitLogin() {
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }

  async verifyWelcomeMessage(username: string) {
    const welcomeLink = this.page.getByRole('link', { name: `Welcome ${username}` });
    await welcomeLink.waitFor({ timeout: 10000 });
    await expect(welcomeLink).toBeVisible();
  }
  
  
  async loginAs(username: string, password: string) {
    await this.openLoginForm();
    await this.fillLoginForm(username, password);
    await this.submitLogin();
  }
}
