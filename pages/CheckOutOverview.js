export class CheckOutOverview{

    constructor(page){
        this.page=page
        this.finishBtn= page.getByRole('button',{name:'Finish'})
    }
    async clickOnFinishBtn(){
        await this.finishBtn.click()

    }
    

}