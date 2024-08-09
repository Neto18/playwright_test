const { test, expect } = require('@playwright/test');

let timeout = 2000;
test('Parallel - Testfile #2 - TC #1 ', async ({ page }) => {
    console.log('Parallel - Testfile #2 - TC #1')
    await page.waitForTimeout(timeout);
});

test('Parallel - Testfile #2 - TC #2', async ({ page }) => {
    console.log('Parallel - Testfile #2 - TC #2')
    await page.waitForTimeout(timeout);
});

test('Parallel - Testfile #2 - TC #3', async ({ page }) => {
    console.log('Parallel - Testfile #2 - TC #3')
    await page.waitForTimeout(timeout);
});

test('Parallel - Testfile #2 - TC #4', async ({ page }) => {
    console.log('Parallel - Testfile #2 - TC #4')
    await page.waitForTimeout(timeout);
});