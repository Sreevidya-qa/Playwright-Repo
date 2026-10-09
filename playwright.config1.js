// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  workers:3,
  reporter: 'html',
  timeout:30*1000, //testcase timeout
  fullyParallel: true,

  expect:{  //assertion timeout
    timeout:40*1000
  },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: true, // means trigger the test with ui shown
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace:"retain-on-failure"
    //browserName:"chromium"-- here we can give as webkit , firefox to trigger it in specific browsers
  },
  projects: [
    {
      name: 'chromium_project',
      use: { 
        browserName: 'chromium',
        headless: false, // means trigger the test with ui shown
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace:"retain-on-failure",
        permissions: ['geolocation','camera','microphone','notifications'], //to give permission to the browser to access the location
        ignoreHTTPSErrors: true, //to ignore the https errors in the browser
         //to run the test in parallel in the browser
        //geolocation: { longitude: 12.4924, latitude: 41.8902 }, //to set the location of the browser
        //viewport: { width: 1280, height: 720 },//to run the test in specific browser with specific viewport size we can use this property
        //browserName:"chromium"-- here we can give as webkit , firefox to trigger it in specific browsers
        //to run the test by using script in package.json, we need to use npx playwright test commandchrome
  },
      },
      {
      name: 'firefox_project',
      use: { 
        browserName: 'firefox',
        headless: false, // means trigger the test with ui shown
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace:"retain-on-failure",
        //...devices['Desktop Firefox'], //to run the test in specific browser with specific device we can use this property
      },
    },
      {
      name: 'webkit_project',
      use: { 
        browserName: 'webkit',
        headless: false, // means trigger the test with ui shown
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace:"retain-on-failure"
      },
    },
  ],


  /* Configure projects for major browsers */
  
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

