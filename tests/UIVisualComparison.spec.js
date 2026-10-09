//used for comparing original UI screen with the current UI screen to check for any visual changes
import { test,expect} from "@playwright/test";


test("Visual UIcomparison", async ({page}) => {
    await page.goto ("https://www.amazon.in/");
    await expect (page).toHaveScreenshot("amazon.png") // this line captures a screenshot of the current state of the page and compares it with the previously saved screenshot named "originalUI.png". If there are any visual differences between the two screenshots, the test will fail, indicating that the UI has changed. This is useful for detecting unintended visual regressions in web applications.

})