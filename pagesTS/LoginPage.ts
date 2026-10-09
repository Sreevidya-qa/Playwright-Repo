import {Locator,Page} from "@playwright/test";

export class LoginPage{

userName:Locator // if we dontot know the type then we can give any instead of loator
password:Locator
loginBtn:Locator
page:Page 

    constructor(page:Page){
        this.page=page
        this.userName= page.getByPlaceholder('Username').first()
        this.password=page.getByPlaceholder("Password").first()
        this.loginBtn= page.locator("#login-button")
    }

    async navigateToPage(){
         await this.page.goto("https://www.saucedemo.com")
    }
    
    async loginUser(uname: string, passwrd: string){

    await this.userName.fill(uname)
    await this.password.fill(passwrd)
    await this.loginBtn.click()
    await this.page.waitForLoadState('networkidle')// used for loading all the products in a page
}
}