import {test,expect} from '@playwright/test'

test ('Checkbox click', async ({page})=>{
await page.goto("https://selenium.qabible.in/index.php")
const inputForm= page.getByRole("link", {name:'Input Form'})
await inputForm.click()
const checkBoxDemo= page.getByRole ("link",{name:"Checkbox Demo"})
await checkBoxDemo.click()

const singleCheckbox= page.getByLabel("Click on this check box")
singleCheckbox.click()

const singleCheckboxmessage= page.locator("#message-one")
const message=  await singleCheckboxmessage.textContent()
console.log (message)

await expect(singleCheckboxmessage).toBeVisible()
await expect(message).toContain("box")
await expect (singleCheckboxmessage).toHaveText(message)



 // for checkbox cases we can use for click() or check() for clicking on checkbox
await page.waitForTimeout(2000)
})