import { test } from '@playwright/test';
import { LoginPage } from './login';

test('User can log in successfully and see welcome message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.openLoginForm();
  await loginPage.fillLoginForm('Nawy', '123123');
  await loginPage.submitLogin();
  await loginPage.verifyWelcomeMessage('Nawy');
});
