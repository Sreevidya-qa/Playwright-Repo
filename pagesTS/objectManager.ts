// used to handle all the page objects in a single file. 
// we can call this file in our test file and create object of all the pages and use them in our test file.
//  This is called Page Object Manager.
import { Page } from "@playwright/test";
import { LoginPage } from "../pagesTS/LoginPage"
import { ProductPage } from "../pagesTS/ProductPage"
import { CartPage } from "../pagesTS/CartPage"
import { CheckOutPage } from "../pagesTS/CheckOutPage"
import { CheckOutOverview } from "../pagesTS/CheckOutOverview"
import { CheckOutCompletePage } from "../pagesTS/CheckOutCompletePage"

export class objectManager{
    page:Page
    loginpage:LoginPage
    productpage:ProductPage
    cartitemclick:CartPage
    checkoutpagedetails:CheckOutPage
    checkoutoverviewpage:CheckOutOverview
    checkoutcompletepage:CheckOutCompletePage

    constructor(page:Page){
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