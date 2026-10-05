export class CheckOutPage{

    constructor(page){

        this.page=page
        this.firstName= page.getByPlaceholder('First Name')
        this.lastName= page.getByPlaceholder('Last Name')
        this.zip= page.getByPlaceholder('Zip/Postal Code')
        this.continueBtn= page.locator('#continue')

    }
    async enterFirstName(firstname){
        await this.firstName.fill(firstname)
    }
    
    async enterLastName(lastname){
        await this.lastName.fill(lastname)
    }

   async enterZip(zipcode){
        await this.zip.fill(zipcode)
   }

   async clickOnContinueBtn(){
    await this.continueBtn.click()
   }

}