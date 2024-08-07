const base = require('@playwright/test')
const { TodoPage } = require('./todo-page')

exports.test = base.test.extend({
    todoPage: async ({ page }, use) => {

        //set up the fixture
        const todoPage = new TodoPage(page)
        await todoPage.goto()
        await todoPage.addTodo('New Todo #1')
        await todoPage.addTodo('New Todo #2')

        // use the fixture value in the test
        await use(todoPage)

        // clean up
        await todoPage.removeAll()
    },
})
exports.expect = base.expect