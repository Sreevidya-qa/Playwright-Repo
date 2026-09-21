// we will use select option to handle dropdown
import {test,expect} from '@playwright/test'

test ("Select from dropdown", async ({page})=>{
    await page.goto("https://selenium.qabible.in/select-input.php")
    const selectColourDropdown = page.getByRole('combobox',{name:'Select Color'})
    // page.getBy label("Select Color")
    await selectColourDropdown.selectOption("Yellow")
    await page.waitForTimeout(3000)


})
