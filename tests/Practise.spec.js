import {test,expect} from '@playwright/test'

test ("Sample program", async ({page})=>{

    await page.goto ("https://demo.playwright.dev/todomvc/?utm_source=chatgpt.com#/")

    const heading= page.getByRole("heading",{name:'todos'})
    await expect(heading).toBeVisible()

    const placeholder= page.getByPlaceholder("What needs to be done?")
    await expect (placeholder).toBeVisible()

    await placeholder.fill("Hello welcome to playwright")
    await placeholder.press("Enter")
     
    const message= await page.getByTestId("todo-title").textContent()
    await expect(message).toContain("Hello")

    const radioBtn= page.getByRole("checkbox").first()
    await radioBtn.click()

    await page.waitForTimeout(3000)
})

