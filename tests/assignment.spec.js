import {test,expect} from "@playwright/test"

test("Assignment",async ({page})=>{

    await page.goto ("https://selenium.qabible.in/simple-form-demo.php")
    console.log(await page.title())
    await expect (page).toHaveTitle ("Obsqura Testing")

    await page.locator("#single-input-field").fill("I am learning Playwright");
    await page.getByRole("button",{name:"Show Message"}).click()
    
    await page.locator("#value-a").fill ('4')
    await page.locator("#value-b").fill('5')
    await page.getByRole('button', {name:"Get Total"}).click()
     
    await page.waitForTimeout(5000)
})

test ("Assignmenttwo" , async ({page})=>{
    await page.goto ("https://selenium.qabible.in/index.php")
    
    const inputForm= page.getByRole("link",{name: 'Input Form'})
    await inputForm.click()
    
    const radioButtonDemo=page.getByRole("link",{name: 'Radio Buttons Demo'})
    await radioButtonDemo.click()

    const radioButtonGender= page.getByLabel('Female').first()
    await radioButtonGender.click()

    const showSelectedValue= page.getByRole ('button',{name: 'Show Selected Value'})
    await showSelectedValue.click()
 
    const selectedMessagelocator= page.locator('.my-2').first()

    await expect(selectedMessagelocator).toBeVisible()
    

    const selectedMessage= await selectedMessagelocator.textContent()

    await expect(selectedMessagelocator).toHaveText(selectedMessage)
    await expect(selectedMessage).toContain("Female")
    
   console.log(selectedMessage)

   await page.waitForTimeout(3000)

})

test.only ("Handling simple alert",async ({page})=>{

    await page.goto("https://selenium.qabible.in/javascript-alert.php")
     const simpleAlertButton= page.getByRole('button',{name:'Click me!'}).first()

    page.on('dialog', async (simplealert)=>{
        console.log(simplealert.type())
        console.log(simplealert.message())
        await page.waitForTimeout(2000)
        simplealert.accept()

    })
   await simpleAlertButton.click()
   
})