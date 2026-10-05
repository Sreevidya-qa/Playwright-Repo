import {expect} from '@playwright/test'

export class CartPage{

    constructor(page){
        this.page=page
        this.cartItem = page.locator(".shopping_cart_link")
        this.cartItemName = page.locator(".inventory_item_name")
        this.checkOutBtn= page.getByRole('button',{name:'Checkout'})

    }
    async clickOnCartItem(){
     await this.cartItem.click()

    }

    async myItem(myProduct){
        await expect(this.cartItemName).toHaveText(myProduct)
    }

    async clickOnCheckOut(){      
    await this.checkOutBtn.click()
    }
}

 