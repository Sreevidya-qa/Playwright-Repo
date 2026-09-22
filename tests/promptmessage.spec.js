import {test,expect} from '@playwright/test'

test ("handing prompt message with value entry", async ({page})=>{

    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    const clickonPromptBox= page.getByRole('button',{name:'Click for Prompt Box'})

    page.on('dialog', async (prompt)=>{ //we should give 'dialog' and name inside async can be changed
        console.log(prompt.type())
        console.log(prompt.message())
       
        await prompt.accept("Hello")
        
       

    })
    await clickonPromptBox.click()

    await page.waitForTimeout(2000)
})