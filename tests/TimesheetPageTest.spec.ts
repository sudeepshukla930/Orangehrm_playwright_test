/*

  This test file tests the functionality of the Timesheet page of a web application using Playwright test automation framework.

*/



import { test,  Page , expect} from '@playwright/test';
const {loginPage} = require('../pages/Login');
const {dashboardPage} = require('../pages/Dashboard')
const {timeSheetPage} = require('../pages/TimeSheet')
const {navigationText} = require('../test_data/data.json');

test.describe('Time/Timesheet page', () => {
  let page: Page;
  
  test.beforeEach(async ({page}) => {
    
    let login = new loginPage(page);
    await login.goToLoginPage();
    await login.enterCredential();
    await login.loginButtonClicked();
    await login.validateLogin();
  });

  

  test(`Dashboard nav link click , currently ${navigationText[3]} `, async ({page}) => {
    // Test code goes here
    let dashboard = new dashboardPage(page,navigationText[3]);
    let timeSheet = new timeSheetPage(page,'Attendance ','Punch In/Out')
    await dashboard.dynamicDashboardNavigation();
    //await timeSheet.dynamicTimesheetdNavigation();
    await timeSheet.clickViewTimesheet();
    


  });
});




