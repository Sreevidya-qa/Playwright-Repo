import {test} from "@playwright/test"

test("Types of Locators",async ({page})=>{// whenever we specify .only only that test function will be executed and rest of the test cases will be ignored.
    await page.goto("https://selenium.qabible.in/form-submit.php")
});
// timeout error is by default is set as 30000ms. 
// if the test case is not completed within that time then it will throw timeout error. 
// we can change the timeout value by using test.setTimeout() method.
// we can also set the timeout value in playwright.config.js file.


// we can execute specific test case by using test.only() method. and also by running
//npx playwright test "filename" in the terminal.

test.only ("Locators One", async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("Vidya")// locating by id
    //await page.pause()// this will pause the execution of the test case and then we need to manually resume the function then only 
    // the test case will be executed. we can also use this method to debug the test case.
    await page.waitForTimeout(5000)// this will wait for 5 seconds before executing the next line of code. we can also use this method to debug the test case.

})

// Locators are the way to find the elements on the web page. we can use locators to 
// find the elements on the web page. Elements of webpage are called webElements. 
// we can use locators to find the webElements on the web page. it is the uniquely identified addreess for
// a WebElement

// <input is the tag, type is the attribute and text given is the value of the attribute.
//eg:<input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="" required="">
//pause and wait for timeout