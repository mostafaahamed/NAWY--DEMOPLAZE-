import { Page, expect } from '@playwright/test';

export class OrderPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToAppleMonitor() {
    await this.page.getByRole('link', { name: 'Monitors' }).click();
    await this.page.locator('a:has-text("Apple monitor 24")').first().click();
    
}

  async addToCartAndVerify() {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Product added');
      await dialog.accept();
    });

    await this.page.getByRole('link', { name: 'Add to cart' }).click();
  }

  async placeOrder() {
    await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
    await this.page.getByRole('button', { name: 'Place Order' }).click();
  }

  async fillOrderForm(data: {
    name: string;
    country: string;
    city: string;
    card: string;
    month: string;
    year: string;
  }) {
    await this.page.locator('#name').fill(data.name);
    await this.page.locator('#country').fill(data.country);
    await this.page.locator('#city').fill(data.city);
    await this.page.locator('#card').fill(data.card);
    await this.page.locator('#month').fill(data.month);
    await this.page.locator('#year').fill(data.year);
  }
  

  async confirmPurchase() {
    await this.page.getByRole('button', { name: 'Purchase' }).click();
    await expect(this.page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  }
}
