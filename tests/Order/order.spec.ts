import { test } from '@playwright/test';
import { LoginPage } from '../Login/login';
import { OrderPage } from './order';

test('User can place order for Apple monitor 24', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);

  await loginPage.navigate();
  await loginPage.loginAs('Nawy', '123123');

  await orderPage.goToAppleMonitor();
  await orderPage.addToCartAndVerify();
  await orderPage.placeOrder();

  await orderPage.fillOrderForm({
    name: 'Mostafa',
    country: 'Egypt',
    city: 'Cairo',
    card: '411111',
    month: '11',
    year: '1998'
  });

  await orderPage.confirmPurchase();
});
