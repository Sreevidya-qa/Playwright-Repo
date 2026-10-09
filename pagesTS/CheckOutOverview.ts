import {Locator,Page,expect} from'@playwright/test'

export class CheckOutOverview{
    page:Page
    finishBtn:Locator

    constructor(page:Page){
        this.page=page
        this.finishBtn= page.getByRole('button',{name:'Finish'})
    }
    async clickOnFinishBtn(){
        await this.finishBtn.click()

    }
    

}