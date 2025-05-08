import { test } from '@playwright/test';
import { RegisterPage } from './registerpage';

test('User can sign up successfully', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.navigate();
  await registerPage.openSignupForm();
  await registerPage.fillSignupForm('Mostafa_' + Date.now(), '123123');
  await registerPage.submitAndVerifyDialog('Sign up successful');

  await page.waitForTimeout(1000); 
});
