import {test,expect} from '@playwright/test'

test ("handling date picker", async ({page})=>{
await page.goto("https://selenium.qabible.in/date-picker.php")
const enterDate= page.locator("#single-input-field")
await enterDate.click()

await page.locator(".datepicker-days th.datepicker-switch").click()// tranversing from parent to child
await page.locator(".datepicker-months th.datepicker-switch").click()

const targetYear= 2026// year which we need to select
const targetMonth=6
const targetDay= 25

while(true)
{
 const currentYearRange=  await page.locator(".datepicker-years th.datepicker-switch").textContent()
 console.log(currentYearRange)
 const startingYear= currentYearRange.split('-')[0]// this is the start value of the selected year
 console.log(startingYear)
 const endingYear=currentYearRange.split('-')[1]// this is the end value of the selected year
 console.log(endingYear)
 
 if (targetYear >= startingYear && targetYear <= endingYear){
    //1999>=2020 and 1999<=2026 , 1999>=2010 and 1999<=2019
    break;
 }

 if(targetYear<startingYear ){
    await page.locator(".datepicker-years th.prev").click()
 }
 else{
    await page.locator(".datepicker-years th.next").click()
 }


}

//await page.getByText(targetYear.toString(),{exact:true}).click()
await page.locator("span.year").filter({hasText:targetYear.toString()}).click()
await page.locator(".month").nth(targetMonth-1).click()

await page.locator(".day",{hasText:targetDay.toString()}).first().click()


const inputDate= await page.locator("#single-input-field").inputValue()
//await inputDate.click()
console.log("Input date :", inputDate)

const showDateButton=  page.getByRole('button',{name:'Show Date'}).first()
await showDateButton.click()

const selectedDate= await page.locator(".my-2").first().textContent()
console.log("Displayed date: ",selectedDate)


await expect(selectedDate).toContain(inputDate)


await page.waitForTimeout(8000)


})
