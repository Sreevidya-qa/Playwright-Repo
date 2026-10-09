import {Locator,Page} from'@playwright/test'

export class ProductPage{
    page:Page
    productTitle:Locator
    
    constructor(page:Page){
        this.page=page
        this.productTitle=  page.locator(".inventory_item_name")
        //this.inventoryDescription= page.locator(".inventory_item_description")
       
    }

    async productCount(){
    const productCount:number= await this.productTitle.count()
    console.log("Total Item:", productCount)
    }

    async productList(){
    const productList:string[]= await this.productTitle.allTextContents() // used to fetch multiple text content. if its single then we use textContent()
    console.log (this.productList)

    }
    async addProductToCart(myProduct:string){

        const productCount = await this.productTitle.count()

    for(let i=0;i<productCount;i++){

        if (await this.productTitle.nth(i).textContent()==myProduct){
            const inventoryDescription= this.page.locator(".inventory_item_description").nth(i)
            const addToCart = inventoryDescription.getByText("Add to cart");
            await addToCart.click()
            break
        }
        
    }


    }

}


 
    

   

   
