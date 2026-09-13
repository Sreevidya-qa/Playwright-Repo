// Locators are the way to find the elements on the web page. we can use locators to 
// find the elements on the web page. Elements of webpage are called webElements. 
// we can use locators to find the webElements on the web page. it is the uniquely identified addreess for
// a WebElement
// timeout error is by default is set as 30000ms. 
// if the test case is not completed within that time then it will throw timeout error. 
// we can change the timeout value by using test.waitforTimeout() method.
// we can also set the timeout value in playwright.config.js file.


// we can execute specific test case by using test.only() method. and also by running
//npx playwright test "filename" in the terminal.


// <input is the tag, type is the attribute and text given is the value of the attribute.
//eg:<input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="" required="">
//pause and wait for timeout
//await page.waitForTimeout(3000)// this will wait for 3 seconds before executing the next line of code. we can also use this method to debug the test case.
// for a label to work there should be a for attribute in the label tag and the value of the for attribute should be same as the id of the input tag.


//timeout in playwright.config.js file is the maximum time that a test case can take to complete. if the test case is not completed within that time then it will throw timeout error. we can change the timeout value by using test.waitforTimeout() method. we can also set the timeout value in playwright.config.js file.
// if time out is given in configfile, then it is accessed globally (general test timeout is 30000ms,but for assertion it is 50000ms)
import {test,expect} from "@playwright/test"

test("Types of Locators",async ({page})=>{// whenever we specify .only only that test function will be executed and rest of the test cases will be ignored.
    await page.goto("https://selenium.qabible.in/form-submit.php")
});

test.only ("Locators One", async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("Vidya")// locating elements by id using css selector
    //await page.pause()// this will pause the execution of the test case and then we need to manually resume the function then only 
    // the test case will be executed. we can also use this method to debug the test case.
    await page.locator(".form-control").nth(1).fill("Sree") //locating element by class name by indexing. here nth(1) means the second element with the class name "form-control". index starts from 0.
    
    //if we want to get the first element in the array we will give first and if it is last, then we will use last method
    await page.locator("[placeholder='Username']").fill("SreeHari")//attribute=valeu maethod is used to locate the element by attribute and value.
    
    //by xpath
    await page.locator("//input[@id='validationCustom03']").fill("Bengaluru")
    

    // special locators-- playwright inbuilt methods to locate the elements on the web page.
    await page.getByPlaceholder("State").fill("Karnataka")// this method is used to locate the element by placeholder text.
    await page.getByLabel("Zip").fill("562125")// this method is used to locate the element by label text.
    await page.getByLabel("Agree to terms and conditions").check()
    //get byRole (button,checkbox,radio,link,heading,combobox,menuitem,option,progressbar,scrollbar,slider,spinbutton,switch,textbox)
    
    const msgLocator= page.locator("#message-one") 
    await expect (msgLocator).not.toBeVisible()// this method is used to verify that the element is visible on the web page. if the element is not visible then it will throw an error.§
    
     await page.getByRole("button",{name:"Submit form"}).click()
    
    const successMessage= await msgLocator.textContent()
    console.log(successMessage)

    await expect(msgLocator).toBeVisible()// this method is used to verify that the element is visible on the web page. if the element is not visible then it will throw an error.
    await expect(msgLocator).toHaveText(successMessage)// this method is used to verify that the locator has the expected text. if the element does not have the expected text then it will throw an error.
    await expect(successMessage).toContain("successfully")
    
    await page.waitForTimeout(3000)
})


