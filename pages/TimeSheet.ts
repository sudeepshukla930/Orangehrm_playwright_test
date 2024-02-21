// Importing the necessary modules and types

import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Class representing the Time Sheet Page actions
 */

exports.timeSheetPage = class timeSheetPage{
   
    // Declaring class properties

    readonly page : Page;
    readonly timesheetNavLinkLocator : Locator;
    readonly timeSheetSubLinkLocator : Locator;
    readonly viewTimesheetLocator : Locator;
    readonly scrollToTable : Locator;
    readonly assertNavLinkName: string;

/**
     * Constructor initializing the locators
     * @param page A Playwright Page instance
     * @param NavLinkName The name of the top-level navigation link
     * @param subNavLinkName The name of the sub-navigation link
     */

    constructor(page:Page,NavLinkName: string, subNavLinkName:string){
        this.page = page;

         // Initializing locators

        this.assertNavLinkName = NavLinkName;
        this.timesheetNavLinkLocator = page.locator('li').filter({ hasText: NavLinkName  })//page.getByText(NavLinkName);
        this.timeSheetSubLinkLocator = page.getByRole('menuitem', { name: subNavLinkName })
        this.scrollToTable = page.getByRole('heading', { name: 'Timesheets Pending Action' });
        this.viewTimesheetLocator = page.getByRole('button', { name: 'View' });
    }


// Methods for interacting with the Time Sheet Page

    async dynamicTimesheetdNavigation() {
      
       await this.timesheetNavLinkLocator.click();

       await this.timeSheetSubLinkLocator.click();
       
        
    }

    async clickViewTimesheet() {
      
       this.page.mouse.wheel(0,200); 

        await this.viewTimesheetLocator.nth(2).click();
       
     }
}