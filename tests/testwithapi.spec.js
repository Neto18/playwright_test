/*
for this to work the todo-mcv testing-lists should be running
*/

/*
let randomID = Math.floor((Math.random() * 1000) + 1)

const data = { 
    completed: false,
    id: randomID.toString(),
    title: 'Test API with Playwright ' + randomID.toString()
}
const completedT = { completed: true }
const completedF = { completed: false }

import { test, expect } from '@playwright/test'
import { exec } from 'child_process'
import { request } from 'http'

// this is just to see the todo being created, edited and deleted, is not required, is just a visual aid
test.afterEach(async({page}) =>{
    await page.goto('http://localhost:3000/')
    await page.waitForTimeout(1000);
})

test.describe('Basic tests with API', () => {

    test('Create new user by API request', async({request}) =>{

        const createNewTodo = await request.post('/todos', {data})
        expect(createNewTodo.status()).toEqual(201)
        expect(createNewTodo.statusText()).toEqual('Created')
        expect(await createNewTodo.json()).toEqual(data)

    })

    test('Get todo by API request', async({request}) => {

        const getTodos = await request.get('/todos')
        expect(getTodos.status()).toEqual(200)
        expect(getTodos.statusText()).toEqual('OK')
        expect(await getTodos.json()).toContainEqual(data)

    })

    test('Update a todo by API request', async({request}) => {

        const updateTodo = await request.patch('/todos/' + randomID,  {data: completedT})
        expect(updateTodo.status()).toEqual(200)
        expect(updateTodo.statusText()).toEqual('OK')

        const getTodos = await updateTodo.json()
        expect(await getTodos.completed).toEqual(true)

    })

    test('Delete todo via API request', async({request}) => {

        const deleteTodo = await request.delete('/todos/' + randomID)
        expect(deleteTodo.status()).toEqual(200)
        expect(deleteTodo.statusText()).toEqual('OK')

        const getTodos = await request.get('/todos')
        expect(getTodos.status()).toEqual(200)
        expect(getTodos.statusText()).toEqual('OK')
        expect(await getTodos.json()).not.toContainEqual(data)

    })
})

*/