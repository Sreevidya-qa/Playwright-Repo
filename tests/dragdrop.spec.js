import {test,expect} from '@playwright/test'

test("drag and drop", async ({page})=>{

    await page.goto("https://selenium.qabible.in/drag-drop.php")

    const dragFromTarget= page.getByText("Draggable n°1") 
     //drag to method is used for drag and drop
    
    const dropToDestination=page.locator("#mydropzone")
  


    await dragFromTarget.dragTo(dropToDestination)

    await page.waitForTimeout(2000)

})

test.only("multiple drag and drop", async ({page})=>{

    await page.goto("https://selenium.qabible.in/drag-drop.php")

    const dragFromTarget= page.locator('[draggable="true"]')//drag to method is used for drag and drop
    const dropToDestination=page.locator("#mydropzone")

    const count=await dragFromTarget.count()

    for(let i=0;i<count;i++){
        await dragFromTarget.nth(0).dragTo(dropToDestination)
    }
    
    await page.waitForTimeout(2000)

})