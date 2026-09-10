//await is used to wait for the asynchronous operations to complete before moving on to the next line of code. In this case, it ensures that the browser context and page are created before proceeding with the test logic.
//fixture: playwright will have certain inbuilt method. so we didnot have to create browser, page, context. playwright will do it for us. 
// we can use them directly in our test case. this is called fixture.

import {test} from "@playwright/test" // here test is a function that is used to define a test case in Playwright. It allows you to write tests for web applications by providing a simple and expressive API. You can use it to create test scenarios, interact with web pages, and assert expected outcomes.

test("First demo", async({browser})=>{ //this is a basic syntax for defining a test case in Playwright. The first argument is the name of the test case, and the second argument is a callback function that contains the test logic.
const context= await browser.newContext() // this line creates a new browser context, which is an isolated environment for running tests. It allows you to have multiple independent sessions within the same browser instance.
const page= await context.newPage()
await page.goto("https://www.google.com/") // this line navigates the page to the specified URL, which is "https://www.google.com/" in this case. It simulates a user opening the Google homepage in the browser.


})

