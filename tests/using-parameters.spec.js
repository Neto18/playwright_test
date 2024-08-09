import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/')
})

const users = ['user1', 'user2']

for (const user of users){

    test(`Test using param '${user}'`, async({ page }) => {

        // create todo
        await page.locator('.new-todo').fill(user);
        await page.locator('.new-todo').press('Enter');

        // check todo is listed
        await expect(page.locator('.view label').last()).toHaveText(user)

    })

}

test('Testing using params from project', async({ page }, testInfo) => {

    const userFromProjectConfig = testInfo.project.use.user

    // create todo
    await page.locator('.new-todo').fill(userFromProjectConfig);
    await page.locator('.new-todo').press('Enter');

    // check todo is listed
    await expect(page.locator('.view label').last()).toHaveText(userFromProjectConfig)

})

test.only('Testing using params from .env file', async({ page }, testInfo) => {

    const valueFromDotEnv = testInfo.project.use.env_var

    // create todo
    await page.locator('.new-todo').fill(valueFromDotEnv);
    await page.locator('.new-todo').press('Enter');

    // check todo is listed
    await expect(page.locator('.view label').last()).toHaveText(valueFromDotEnv)

})