import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/contact');
});

test('submits successfully when filled correctly', async ({ page }) => {
  await page.route('POST', '/api/email/send', route =>
    route.fulfill({ status: 200, body: '{}' })
  );

  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="subject"]', 'Hello there');
  await page.fill('textarea[name="message"]', 'This is a test message');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Email sent successfully!')).toBeVisible();
});

test('shows error toast when API fails', async ({ page }) => {
  await page.route('POST', '/api/email/send', route =>
    route.fulfill({ status: 500, body: '{}' })
  );

  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="subject"]', 'Hello there');
  await page.fill('textarea[name="message"]', 'This is a test message');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Error sending email, try again later!')).toBeVisible();
});