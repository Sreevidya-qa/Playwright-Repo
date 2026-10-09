import {Locator,Page, expect} from '@playwright/test'

export class CartPage{
    cartItem:Locator
    cartItemName:Locator
    checkOutBtn:Locator
    page:Page

    constructor(page:Page){
        this.page=page
        this.cartItem = page.locator(".shopping_cart_link")
        this.cartItemName = page.locator(".inventory_item_name")
        this.checkOutBtn= page.getByRole('button',{name:'Checkout'})

    }
    async clickOnCartItem(){
     await this.cartItem.click()

    }

    async myItem(myProduct:string){
        await expect(this.cartItemName).toHaveText(myProduct)
    }

    async clickOnCheckOut(){      
    await this.checkOutBtn.click()
    }
}

 