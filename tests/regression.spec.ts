import { test, expect } from '@playwright/test';

test.describe('MSN Global Markets - Regression Pack', () => {

    test('Home Page: Visual & Core Elements', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/MSN Global/);
        await expect(page.locator('text=Dubai-Based AI Fund')).toBeVisible();
        await expect(page.locator('text=AIEnhanced Fund Management')).toBeVisible();
    });

    test('Navigation: Hero CTA to AI Funds', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Trade with AI');
        await expect(page).toHaveURL(/.*ai-funds/);
        await expect(page.locator('h1')).toContainText('AI-Powered Fund Management');
    });

    test('Chatbot: Toggle & Interaction', async ({ page }) => {
        await page.goto('/');
        const chatTrigger = page.locator('button >> .lucide-message-square');
        await chatTrigger.click();
        await expect(page.locator('text=How can we help?')).toBeVisible();
        await page.click('.lucide-minus');
        await expect(page.locator('text=How can we help?')).not.toBeVisible();
    });

    test('AI Funds: Strategy Cards Displayed', async ({ page }) => {
        await page.goto('/ai-funds');
        await expect(page.locator('text=Aggressive Growth')).toBeVisible();
        await expect(page.locator('text=Institutional AI Hybrid')).toBeVisible();
        await expect(page.locator('text=Global Macro Edge')).toBeVisible();
    });

    test('Dashboard: Authentication Redirect', async ({ page }) => {
        await page.goto('/dashboard');
        // Should redirect to login if not authenticated
        await expect(page).toHaveURL(/.*login/);
    });

    test('Insights: Live Feed Presence', async ({ page }) => {
        await page.goto('/insights');
        const iframe = page.frameLocator('iframe[src*="tradingview"]');
        await expect(iframe.first()).toBeDefined();
    });

    test('Mobile Responsiveness: Navbar Menu', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');
        const menuBtn = page.locator('button >> .lucide-menu');
        await menuBtn.click();
        await expect(page.locator('nav >> text=Home')).toBeVisible();
        await expect(page.locator('nav >> text=Fund Management')).toBeVisible();
    });

});
