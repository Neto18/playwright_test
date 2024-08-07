export class TodoPage {
    /**
     * @param {import ('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page
        this.inputBox = this.page.locator('.new-todo')
        this.todoItem = this.page.getByTestId('todo-item')
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc/#/')
    }

    /**
     * @param {string} text  
     */

    async addTodo(text) {
        await this.inputBox.fill(text)
        await this.inputBox.press('Enter')
    }

    /**
     * @param {string} text
     */

    async deleteTodo(text) {
        const todo = this.todoItem.filter({ hasText: text })
        await todo.hover()
        await todo.getByLabel('Delete').click()
    }

    async removeAll() {
        const todo = this.todoItem
        while (await todo.count() > 0) {
            await todo.first().hover()
            await todo.getByLabel('Delete').first().click()
        }
    }
}