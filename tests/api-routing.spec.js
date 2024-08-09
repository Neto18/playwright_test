import { test, expect } from '@playwright/test'

test.describe.skip('Mock data from API using playwright - Abort', () => {

    test.beforeEach(async ({ context }) => {
        await context.route(/.css$/, (route) => route.abort())
    })

    test('Loading page without CSS', async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc/#/')
    })

})

test.describe.skip('Mock API response - Fulfill', () => {

    test('Mock API request', async ({ page, request }) => {

        await page.route('http://localhost:3000/todos', async (route) => {
            const json = [
                {
                    "completed": true,
                    "id": "18",
                    "title": "Mock API response"
                },
            ]
            await route.fulfill({ json })
        })

        await page.goto('http://localhost:3000/')
    })
})