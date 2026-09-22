
import {test,expect} from '@playwright/test'

test ("Handling child window from parent window", async ({page})=>{
await page.goto("https://selenium.qabible.in/window-popup.php")
const likeUsOnFacebook= page.getByRole('link',{name:' Like us On Facebook'})
await likeUsOnFacebook.click()

const [childPage]= await Promise.all([
    page.waitForEvent('popup'),
    await likeUsOnFacebook.click()
]) 
await childPage.waitForLoadState() // wait until new page to load

const parentPageTitle= await page.title()// will get parent title
console.log(parentPageTitle)

const childPageTitle= await childPage.title()
console.log(childPageTitle)

await childPage.close()

await page.waitForTimeout(3000)
})