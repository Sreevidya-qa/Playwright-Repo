 import {test,expect} from '@playwright/test';

 test ("Handling Frames", async ({page}) =>{

    await page.goto("https://demoqa.com/frames");

    const iframe = page.frameLocator('#frame1');// used to locate the iframe element on the page using its ID selector. 
    //The frameLocator method is used to create a locator for the iframe, allowing us to interact with its contents.in DOM it is represented in iFrame tag
    const textlocator= iframe.locator("#sampleHeading")
    const content= await textlocator.textContent();
    console.log (content);

    await expect (textlocator).toHaveText(content);

 })