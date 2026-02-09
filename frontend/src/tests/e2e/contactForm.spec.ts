import { test, expect, type Route, type Request } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/contact');
});

test('submits successfully when filled correctly', async ({ page }) => {
  // Stub the POST request
  await page.route('/api/email/send', (route: Route, _request: Request) => {
    // fulfill with a fake response
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({}),
    });
  });

  await page.goto('/contact');

  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="subject"]', 'Hello there');
  await page.fill('textarea[name="message"]', 'This is a test message');

  await page.click('button[type="submit"]');

  // You can assert a toast appeared
  await expect(page.locator('text=Email sent successfully!')).toBeVisible();
});

test('shows error toast when API fails', async ({ page }) => {
  await page.route('/api/email/send', (route: Route, _request: Request) => {
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({}),
    });
  });

  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="subject"]', 'Hello there');
  await page.fill('textarea[name="message"]', 'This is a test message');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Error sending email, try again later!')).toBeVisible();
});
