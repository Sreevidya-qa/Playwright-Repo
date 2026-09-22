import {test,expect} from '@playwright/test'

test ("handling alerts", async ({page})=>{
    await page.goto ("https://selenium.qabible.in/javascript-alert.php")
    const clickMe= page.getByRole('button', {name:'Click me!'}).last()
    
    page.on('dialog',async (dialog)=>{ // for alert we need to first handle the alert page then we will perform click to open the alert
        await page.waitForTimeout(2000)
        //await dialog.accept()-- to accept the alert popup
        await dialog.dismiss() //to dismiss/cancel alert popup
    })
    await clickMe.click()

    await page.waitForTimeout(5000)
})