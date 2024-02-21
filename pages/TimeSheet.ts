import { expect, type Locator, type Page } from '@playwright/test';

exports.timeSheetPage = class timeSheetPage{

    readonly page : Page;
    readonly timesheetNavLinkLocator : Locator;
    readonly timeSheetSubLinkLocator : Locator;
    readonly viewTimesheetLocator : Locator;
    readonly scrollToTable : Locator;
    readonly assertNavLinkName: string;

    constructor(page:Page,NavLinkName: string, subNavLinkName:string){
        this.page = page;
        this.assertNavLinkName = NavLinkName;
        this.timesheetNavLinkLocator = page.locator('li').filter({ hasText: NavLinkName  })//page.getByText(NavLinkName);
        this.timeSheetSubLinkLocator = page.getByRole('menuitem', { name: subNavLinkName })
        this.scrollToTable = page.getByRole('heading', { name: 'Timesheets Pending Action' });
        this.viewTimesheetLocator = page.getByRole('button', { name: 'View' });
    }

    async dynamicTimesheetdNavigation() {
      
       await this.timesheetNavLinkLocator.click();

       //await expect(this.page.url()).toContain(this.assertNavLinkName.toLowerCase());
       await this.timeSheetSubLinkLocator.click();
       
       //await this.timesheetNavLinkLocator.click();

       await this.page.waitForTimeout(3000);
        
        
    }

    async clickViewTimesheet() {
      
       
 
        //await expect(this.page.url()).toContain(this.assertNavLinkName.toLowerCase());
       
        
       // await this.viewTimesheetLocator.nth(2).scrollIntoViewIfNeeded();
       this.page.mouse.wheel(0,200); 
       await this.page.waitForTimeout(2000);
        await this.viewTimesheetLocator.nth(2).click();
        await this.page.waitForTimeout(8000);
         
         
     }
}