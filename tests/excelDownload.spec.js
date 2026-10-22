import {test,expect} from '@playwright/test'

test ('Download file @web',async ({page})=>{

     await page.goto ("https://demoqa.com/upload-download")
     const downloadFile= page.getByRole('button',{name:'Download'})

     const downloadPromise= page.waitForEvent("download")// used to wait for that event to happenother wise it will jump to next
    await downloadFile.click()

     const download= await downloadPromise
     await download.saveAs("/Users/hari/Desktop/Playwright/Utils/sampleFile.jpeg")

    

     await page.waitForTimeout(3000)
})

//to run in codegen npx playwright codegen url