import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/')
    const testToCheck = 'The new todo #18'

    // create todo
    await page.locator('.new-todo').fill(testToCheck);
    await page.locator('.new-todo').press('Enter');
})


test('Mark all todos as done and check', async ({ page }) => {

    // compare all page
    await page.getByLabel('Mark all as complete').check()
    await expect(page).toHaveScreenshot()

    // compare only one element
    const inputElemet = page.locator('.new-todo')
    await expect(inputElemet).toHaveScreenshot('inputElemet.png')

})