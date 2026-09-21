import {test,expect} from '@playwright/test'

test ("Handling Modals", async ({page})=>{
await page.goto ("https://selenium.qabible.in/bootstrap-alert.php")
 
const bootStrapModal= page.getByRole('link',{name:'Bootstrap Modal'})
await bootStrapModal.click()

const singleModalbtn= page.getByRole('button',{name:'Launch modal'}).first()
await expect(singleModalbtn).toBeVisible()
await singleModalbtn.click()

const modal= page.locator('#exampleModalCenter')
await modal.locator('.btn.btn-secondary').click()// if an element i has two classes within another then we will put '.' before both the class

await page.waitForTimeout(2000)
})