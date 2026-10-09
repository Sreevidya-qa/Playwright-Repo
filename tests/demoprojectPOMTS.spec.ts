import {test,expect} from "@playwright/test"
import { objectManager} from "../pagesTS/objectManager"
import data from "../Utils/data.json"

//const testData= JSON.parse(JSON.stringify(data))// used to convert JSON data into string format and then convert it into JSON format.
// This is used to avoid the error of "Unexpected token u in JSON at position 0" while reading the data from JSON file.

// if we are using an array of testdata then we need to use forof loop to iterate through the array and run the same test case for multiple data sets.

for (const testData of data){ // used for iterating same test case for multiple data sets. 
// we can use this method to run the same test case for multiple data sets. if we use same same testname

test(`login screen ${testData.myProduct}`, async ({page})=>{ //this change is used to make the test case dynamic and run 
    //the same test case for multiple data sets. we can use this method to run the same test case for multiple data sets. if we use same same testname
    // then error will be thrown. so we need to make the testname dynamic by using the data from JSON file. 
    // we can use this method to run the same test case for multiple data sets.

    const pom= new objectManager(page)

    const loginpage= await pom.getLoginPage()
    await loginpage.navigateToPage()
    await loginpage.loginUser(testData.uname, testData.passwrd)

    const productpage= await pom.getProductPage()
    await productpage.productCount()
    await productpage.productList()
    await productpage.addProductToCart(testData.myProduct)

    const cartitemclick= await pom.getCartPage()
    await cartitemclick.clickOnCartItem()
    await cartitemclick.myItem(testData.myProduct)
    await cartitemclick.clickOnCheckOut()

    const checkoutpagedetails= await pom.getCheckOutPage()
    await checkoutpagedetails.enterFirstName(testData.firstName)
    await checkoutpagedetails.enterLastName(testData.lastName)
    await checkoutpagedetails.enterZip(testData.zipCode)
    await checkoutpagedetails.clickOnContinueBtn()

     const checkoutoverviewpage= await pom.getCheckOutOverviewPage()
    await checkoutoverviewpage.clickOnFinishBtn()

    const checkoutcompletepage= await pom.getCheckOutCompletePage()
    await checkoutcompletepage.thanksMessage()

    await page.waitForTimeout(3000)

})}