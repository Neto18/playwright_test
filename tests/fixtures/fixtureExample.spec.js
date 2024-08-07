const { test, expect } = require('./pages')

test('Basic test using fixtures', async ({ todoPage, page }) => {
    const itemText = 'Some item'
    await todoPage.addTodo(itemText)
    await expect(page.getByTestId('todo-item')).toContainText([itemText,])
})