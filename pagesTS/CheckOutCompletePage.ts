import {Locator,Page,expect} from'@playwright/test'

export class CheckOutCompletePage{
    page:Page
    thankyouMessage:Locator

    constructor(page:Page){
        this.page= page
        this.thankyouMessage= page.locator('.complete-header')

    }

    async thanksMessage(){
        await expect(this.thankyouMessage).toHaveText("Thank you for your order!")
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    }
    
    
    

}