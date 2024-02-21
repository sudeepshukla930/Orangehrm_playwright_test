/*

  This test file performs end-to-end testing of the Leave section of a web application using the Playwright test automation framework.

*/



// Importing the necessary modules and files


import { test,  Page , expect} from '@playwright/test';
import { BasePage } from '../utils/BaseClass';
import { Global } from '../utils/GlobalVal';
const {loginPage} = require('../pages/Login');
const {dashboardPage} = require('../pages/Dashboard')
const {navigationText} = require('../test_data/data.json');
const {LeavePage } = require('../pages/Leave/Leave')
const {LeaveListPage} = require('../pages/Leave/LeaveList')
const {AssignLeavePage} = require('../pages/Leave/AssignLeave')
const {AddEntitlementsPage} = require('../pages/Leave/AddEntitlements')


// Describing the test suite

test.describe('Leave Section ', () => {
  let page: Page;
  
// Setting up the test environment before each test case

  test.beforeEach(async ({page}) => {
    
    let login = new loginPage(page);
    await login.goToLoginPage();
    await login.enterCredential();
    await login.loginButtonClicked();
    await login.validateLogin();
    let dashboard = new dashboardPage(page,navigationText[2]);
    await dashboard.dynamicDashboardNavigation();
    await BasePage.getUsernameFromDom(page);
  });

  
// testcase to check My Leave Section

  test(`Test of My Leave section `, async ({page}) => {
    
        let leave = new LeavePage(page);

        await leave.goToLeaveNav('My Leave');

        await leave.selectDate('2023-03-08','2023-14-09');

        await leave.selectStatus('Rejected');

        await leave.selectLeaveType('US - Personal');

        await leave.buttonClick('Search');

        await leave.validateRecord();

  });


// testcase to check Leave List Section


  test(`Test  of Leave list`, async ({page}) => {
    // Test code goes here
        let leave = new LeavePage(page);
        let leaveList = new LeaveListPage(page);

        await leave.goToLeaveNav('Leave List');

        await leave.selectDate('2023-03-08','2023-14-09');

        await leave.selectStatus('Rejected');

        await leaveList.EnterName('a');

        await leaveList.nameSuggestionListClick();

        await leaveList.subTypeSelect('Development');

        await leave.buttonClick('Search');


  });


// testcase to check  Assign Leave Section


  test(`Test  of Assign Leave`, async ({page}) => {
    
        let leave = new LeavePage(page);
        let leaveList = new LeaveListPage(page);
        let assignLeave = new AssignLeavePage(page);

        await leave.goToLeaveNav('Assign Leave');

        await leaveList.EnterName(Global.username);

        await leave.selectLeaveType('US - Personal');

        await leave.selectDate('2023-03-08','2023-14-09');

        await assignLeave.typeComment('personal leave applying....')

        await leave.buttonClick('Assign');


  });



  test(`Test  of Add Entitlements`, async ({page}) => {
    // Test code goes here
        let leave = new LeavePage(page);
        let leaveList = new LeaveListPage(page);
        let assignLeave = new AssignLeavePage(page);
        let addEntitlements = new AddEntitlementsPage(page);

        await leave.goToLeaveNav('Entitlements');
    
        await addEntitlements.selectDropdown('Add Entitlements')
    
        await leaveList.EnterName(Global.username);

        await leaveList.nameSuggestionListClick();        
     
        await leave.selectLeaveType('US - Personal');

        await addEntitlements.enterNumberOfLeave('10');
        
        await page.pause()
        
        await leave.buttonClick('Save');
        
        await page.waitForTimeout(9000);


  });

  
});




