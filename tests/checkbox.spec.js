import {test,expect} from '@playwright/test'
import { resourceLimits } from 'node:worker_threads'

test ('Checkbox click', async ({page})=>{
await page.goto("https://selenium.qabible.in/index.php")
const inputForm= page.getByRole("link", {name:'Input Form'})
await inputForm.click()
const checkBoxDemo= page.getByRole ("link",{name:"Checkbox Demo"})
await checkBoxDemo.click()

const singleCheckbox= page.getByLabel("Click on this check box")
await singleCheckbox.click()

const singleCheckboxmessage= page.locator("#message-one")
const message=  await singleCheckboxmessage.textContent()
console.log (message)

const result= await singleCheckbox.isChecked() // this will returns a boolean value
console.log(result)
await expect(singleCheckbox).toBeChecked()  
await expect(result).toBeTruthy()
//await expect(result).toBeFalsy()


await expect(singleCheckboxmessage).toBeVisible()
await expect(message).toContain("box")
await expect (singleCheckboxmessage).toHaveText(message)



 // for checkbox cases we can use for click() or check() for clicking on checkbox
await page.waitForTimeout(2000)
})