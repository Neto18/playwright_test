import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/')
})

test.describe('Some features from Playwright', () => {

    test('#1 Info Annotation', async ({ page }) => {

        test.info().annotations.push({
            type: "issue",
            description: "https://github.com/Neto18/playwright_test/issues",
        })

        const testToCheck = 'The new todo #1'

        // create 1st todo
        await page.locator('.new-todo').fill(testToCheck);
        await page.locator('.new-todo').press('Enter');

        // check todo is listed
        await expect(page.locator('.view label').last()).toHaveText(testToCheck)

    })

    // this one is expected to fail, but continue and finish 
    test('#2 Test Soft Assertions', async ({ page }) => {

        const testToCheck = ['The new todo #1', 'The new todo #2', 'The new todo #3']

        // create 1st todo
        await page.locator('.new-todo').fill(testToCheck[1]);
        await page.locator('.new-todo').press('Enter');

        // check todo is listed
        await expect.soft(page.locator('.view label').last()).toHaveText(testToCheck[1]) // fixed to pass the build

        // create 1st todo
        await page.locator('.new-todo').fill(testToCheck[0]);
        await page.locator('.new-todo').press('Enter');

        // check todo is listed
        await expect.soft(page.locator('.view label').last()).toHaveText(testToCheck[0], testToCheck[1])

    })
})