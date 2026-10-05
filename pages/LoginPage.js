export class LoginPage{

    constructor(page){
        this.page=page
        this.userName= page.getByPlaceholder('Username').first()
        this.password=page.getByPlaceholder("Password").first()
        this.loginBtn= page.locator("#login-button")
    }

    async navigateToPage(){
         await this.page.goto("https://www.saucedemo.com")
    }
    
    async loginUser(uname,passwrd){

    await this.userName.fill(uname)
    await this.password.fill(passwrd)
    await this.loginBtn.click()
    await this.page.waitForLoadState('networkidle')// used for loading all the products in a page
}
}