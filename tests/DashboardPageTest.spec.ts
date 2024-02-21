/*

  This test file tests the functionality of the Dashboard page of a web application using Playwright test automation framework.

*/



// Importing the necessary modules and files

import { test,  Page , expect} from '@playwright/test';
const {loginPage} = require('../pages/Login');
const {dashboardPage} = require('../pages/Dashboard')
const {navigationText} = require('../test_data/data.json');


// Describing the test suite

test.describe('Dashboard page', () => {
  let page: Page;
  
// Setting up the test environment before each test case

  test.beforeEach(async ({page}) => {
    
    let login = new loginPage(page);
    await login.goToLoginPage();
    await login.enterCredential();
    await login.loginButtonClicked();
    await login.validateLogin();
  });

  

 // Test case to test the navigation functionality of a specific navigation link on the Dashboard page

  test(`Dashboard nav link click , currently ${navigationText[6]} `, async ({page}) => {
    

    let dashboard = new dashboardPage(page,navigationText[6]);
    await dashboard.dynamicDashboardNavigation();
  });


// Test case to test the navigation functionality of all the navigation links on the Dashboard page using a loop

  test.only(`Dashboard nav link click through loop `, async ({page}) => {
   
    for (let i = 0; i < navigationText.length; i++) {
      let dashboard = new dashboardPage(page,navigationText[i]);
      await dashboard.dynamicDashboardNavigation(navigationText[i]);
    }
    
  });
});




