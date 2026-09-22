import {test,expect} from '@playwright/test'

test ("handling date picker", async ({page})=>{
await page.goto("https://selenium.qabible.in/date-picker.php")
const enterDate= page.locator("#single-input-field")
await enterDate.click()

await page.waitForTimeout(3000)
})
