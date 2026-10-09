import {test,expect} from '@playwright/test';

test ("Screenshot", async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.screenshot({path:"screenshot.png", fullPage:true}); // for getting screen shot of a page

    const loginBtn= page.getByRole('button', { name: 'Login' });
    await loginBtn.screenshot({path:"login-button.png"});// for getting screen shot of a particular element

}
)