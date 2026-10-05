

export class ProductPage{
    
    constructor(page){
        this.page=page
        this.productTitle=  page.locator(".inventory_item_name")
        //this.inventoryDescription= page.locator(".inventory_item_description")
       
    }

    async productCount(){
    this.productCount= await this.productTitle.count()
    console.log("Total Item:", this.productCount)
    }

    async productList(){
    this.productList= await this.productTitle.allTextContents() // used to fetch multiple text content. if its single then we use textContent()
    console.log (this.productList)

    }
    async addProductToCart(myProduct){
        this.myProduct=myProduct

        const productCount = await this.productTitle.count()

    for(let i=0;i<this.productCount;i++){

        if (await this.productTitle.nth(i).textContent()==this.myProduct){
            const inventoryDescription= this.page.locator(".inventory_item_description").nth(i)
            const addToCart = inventoryDescription.getByText("Add to cart");
            await addToCart.click()
            break
        }
        
    }


    }

}


 
    

   

   
