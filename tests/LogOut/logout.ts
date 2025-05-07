import { test, expect } from '@playwright/test';
import { LoginPage } from '../Login/login';

test('User can log out successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.loginAs('Nawy', '123123'); // ✅ إعادة استخدام لوجن

  await page.getByRole('link', { name: 'Welcome Nawy' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();

  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});
