import {Locator,Page} from'@playwright/test'

export class CheckOutPage{
    page:Page
    firstName:Locator
    lastName:Locator
    zip:Locator
    continueBtn:Locator

    constructor(page:Page){

        this.page=page
        this.firstName= page.getByPlaceholder('First Name')
        this.lastName= page.getByPlaceholder('Last Name')
        this.zip= page.getByPlaceholder('Zip/Postal Code')
        this.continueBtn= page.locator('#continue')

    }
    async enterFirstName(firstname:string){
        await this.firstName.fill(firstname)
    }
    
    async enterLastName(lastname:string){
        await this.lastName.fill(lastname)
    }

   async enterZip(zipcode:string){
        await this.zip.fill(zipcode)
   }

   async clickOnContinueBtn(){
    await this.continueBtn.click()
   }

}