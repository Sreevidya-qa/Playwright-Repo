// used to handle all the page objects in a single file. 
// we can call this file in our test file and create object of all the pages and use them in our test file.
//  This is called Page Object Manager.

import { LoginPage } from "../pages/loginPage"
import { ProductPage } from "../pages/ProductPage"
import { CartPage } from "../pages/CartPage"
import { CheckOutPage } from "../pages/CheckOutPage"
import { CheckOutOverview } from "../pages/CheckOutOverview"
import { CheckOutCompletePage } from "../pages/CheckOutCompletePage"

export class PageObjectManager{

    constructor(page){
        this.page=page
        this.loginpage= new LoginPage(page) //object cretation and its construstor calling
        this.productpage= new ProductPage(page)
        this.cartitemclick= new CartPage(page)
        this.checkoutpagedetails= new CheckOutPage(page)
        this.checkoutoverviewpage= new CheckOutOverview(page)
        this.checkoutcompletepage= new CheckOutCompletePage(page)

    }
    async getLoginPage(){
        return this.loginpage
    }   
    async getProductPage(){
        return this.productpage
    }
    async getCartPage(){
        return this.cartitemclick
    }
    async getCheckOutPage(){
        return this.checkoutpagedetails
    }
    async getCheckOutOverviewPage(){
        return this.checkoutoverviewpage
    }
    async getCheckOutCompletePage(){
        return this.checkoutcompletepage
    }
}