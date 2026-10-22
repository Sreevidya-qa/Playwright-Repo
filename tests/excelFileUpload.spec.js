import {test,expect} from '@playwright/test'

test ("File Upload @web @smoke", async ({page})=>{

    await page.goto ("https://demoqa.com/upload-download")
    const choosenFile = page.locator("#uploadFile")
    await choosenFile.setInputFiles("/Users/hari/Desktop/Playwright/Utils/Vehicle.xlsx")

    //await page.pause()
})

// to run specific we can give the tag and run the file npx playwright test --grep @web(tagname)