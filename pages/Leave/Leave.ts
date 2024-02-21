// Importing the necessary modules and types

import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Class representing the LeavePage Page actions
 */

exports.LeavePage = class LeavePage {

    // Declaring class properties

    readonly page: Page;
    readonly navBarLocator:Locator;
    readonly fromDateLocator:Locator;
    readonly ToDateLocator:Locator;
    readonly selectDropdownListLocator:Locator;
    readonly selectDropdown:Locator;
    readonly leaveTypeLocator:Locator;
    readonly assertTextLocator:Locator;

    private buttonLocator: Locator;


    /**
     * Constructor initializing the locators
     * @param page A Playwright Page instance
     */

    constructor(page: Page){
        this.page = page;
        this.navBarLocator = page.getByRole("navigation");
        this.fromDateLocator = page.getByPlaceholder("yyyy-dd-mm").nth(0);
        this.ToDateLocator = page.getByPlaceholder("yyyy-dd-mm").nth(1);
        this.selectDropdown = page.locator('.oxd-select-text--after > .oxd-icon');
        this.selectDropdownListLocator = page.getByRole("listbox")
                                             .getByRole("option")
                                             .locator('span');
        this.leaveTypeLocator =  page.getByText('-- Select --');
        this.buttonLocator = page.getByRole('button');
        this.assertTextLocator = page.locator('.orangehrm-header-container>span');

    }
    
        // Methods for interacting with the  Page


    private updateButtonLocator(buttonValue: string): void {
        this.buttonLocator = this.page.getByRole('button',{name:buttonValue});
      }

    async goToLeaveNav(navName:string){
        
        await this.navBarLocator.getByText(navName).click();
        // await expect(await this.assertNavBarElement.innerText()).toContain(navName);
        
    }

    async selectDate(fromDate:string , toDate:string){
        await this.fromDateLocator.fill(fromDate);
        await this.ToDateLocator.fill(toDate);

    }



    async selectStatus(statusName:string){
        await this.selectDropdown.nth(0).click();
        //console.log(await this.selectDropdownListLocator.innerText());
    
       await this.selectDropdownListLocator.getByText(statusName).click();

    }

    async selectLeaveType(leaveType:string){
       
        await this.leaveTypeLocator.click();

        await this.selectDropdownListLocator.getByText(leaveType).click();
     }

     async buttonClick(buttonType:string){
        await this.updateButtonLocator(buttonType);
        await this.buttonLocator.click();
        
     }

     async validateRecord(){
        await expect( this.assertTextLocator ).toHaveText('No Records Found')
     }




}





    
