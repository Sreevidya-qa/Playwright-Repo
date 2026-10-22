/*test.skip
test.only
test.slow
test.fail*/

import {test} from '@playwright/test'

test("Annotation", async ({page})=>{
    console.log("test started")
})

/*test.only("Annotation for only", async ({page})=>{
    console.log("test execution for only test ")
})*/

test.skip("Annotation for skip", async ({page})=>{
    console.log("test execution for skip which will not get executed")
})

test("Annotation for fail", async ({page})=>{
    console.log("test execution for fail cases which is expected")
    test.fail()
})

test("Annotation for slow", async ({page})=>{
    console.log("test execution for slow so it takes time to execute the cases")
    test.slow()
})


