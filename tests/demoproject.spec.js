import {test,expect} from "@playwright/test"

test('login screen', async ({page})=>{

    await page.goto("https://www.saucedemo.com")

    const userName= page.getByPlaceholder('Username').first()
    await userName.fill("standard_user")
    const password=page.getByPlaceholder("Password").first()
    await password.fill("secret_sauce")

    const loginBtn= page.locator("#login-button")
    await loginBtn.click()

    await page.waitForLoadState('networkidle')// used for loading all the products in a page

    const productTitle=  page.locator(".inventory_item_name")
    const productCount= await productTitle.count()
    console.log("Total Item:", productCount)

    const productList= await productTitle.allTextContents() // used to fetch multiple text content. if its single then we use textContent()
    console.log (productList)

    const myProduct= "Sauce Labs Bolt T-Shirt"

    for(let i=0;i<productCount;i++){
        if (await productTitle.nth(i).textContent()==myProduct){

            const inventoryDescription= page.locator(".inventory_item_description").nth(i)
            const addToCart=  inventoryDescription.getByText("Add to cart")
            await addToCart.click()
            break
        }
        
    }
    const cartItem= page.locator(".shopping_cart_link")
    await cartItem.click()

    const cartItemName= await page.locator(".inventory_item_name")

    await expect(cartItemName).toHaveText(myProduct)// if we are using toHave text () we need to check it with the locator not the string
    //if we are using toContain then it is checking the sring value

    const checkOutBtn= page.getByRole('button',{name:'Checkout'})
    await checkOutBtn.click()

    const firstName= page.getByPlaceholder('First Name')
    await firstName.fill("Vidya")
    
    const lastName= page.getByPlaceholder('Last Name')
    await lastName.fill('S')

    const zip= page.getByPlaceholder('Zip/Postal Code')
    await zip.fill('562125')

    const  continueBtn= page.locator('#continue')
    await continueBtn.click()

    const finishBtn= page.getByRole('button',{name:'Finish'})
    await finishBtn.click()

   
    const thankyouMessage= page.locator('.complete-header')
    await expect(thankyouMessage).toHaveText("Thank you for your order!")
    
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")

    await page.waitForTimeout(3000)

})