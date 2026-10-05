import {expect} from'@playwright/test'

export class CheckOutCompletePage{

    constructor(page){
        this.page= page
        this.thankyouMessage= page.locator('.complete-header')

    }

    async thanksMessage(){
        await expect(this.thankyouMessage).toHaveText("Thank you for your order!")
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    }
    
    
    

}