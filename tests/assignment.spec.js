import {test} from "@playwright/test"

test("Assignment",async ({page})=>{

    await page.goto ("https://selenium.qabible.in/simple-form-demo.php")
    await page.locator("#single-input-field").fill("I am learning Playwright");
    await page.getByRole("button",{name:"Show Message"}).click()
    
    await page.locator("#value-a").fill ('4')
    await page.locator("#value-b").fill('5')
    await page.getByRole('button', {name:"Get Total"}).click()
     
    await page.waitForTimeout(5000)
})