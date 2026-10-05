import {test,expect} from "@playwright/test"
import { PageObjectManager } from "../pages/PageObjectManager"


test('login screen', async ({page})=>{

    const pom= new PageObjectManager(page)

    const loginpage= await pom.getLoginPage()
    await loginpage.navigateToPage()
    const uname= "standard_user"
    const passwrd= "secret_sauce"
    await loginpage.loginUser(uname, passwrd)

    const productpage= await pom.getProductPage()
    const myProduct= "Sauce Labs Bolt T-Shirt"
    await productpage.productCount()
    await productpage.productList()
    await productpage.addProductToCart(myProduct)

    const cartitemclick= await pom.getCartPage()
    await cartitemclick.clickOnCartItem()
    await cartitemclick.myItem(myProduct)
    await cartitemclick.clickOnCheckOut()

    const checkoutpagedetails= await pom.getCheckOutPage()
    const firstName= "Sree"
    const lastName= "s"
    const zip= "562125"
    await checkoutpagedetails.enterFirstName(firstName)
    await checkoutpagedetails.enterLastName(lastName)
    await checkoutpagedetails.enterZip(zip)
    await checkoutpagedetails.clickOnContinueBtn()

     const checkoutoverviewpage= await pom.getCheckOutOverviewPage()
    await checkoutoverviewpage.clickOnFinishBtn()

    const checkoutcompletepage= await pom.getCheckOutCompletePage()
    await checkoutcompletepage.thanksMessage()

    await page.waitForTimeout(3000)

})