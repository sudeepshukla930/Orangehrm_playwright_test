// Importing the necessary modules and types

import { expect, type Locator, type Page } from '@playwright/test';


/**
 * Class representing the Add Entitlements Page actions
 */

exports.AddEntitlementsPage = class AddEntitlementsPage {

    // Declaring class properties

    readonly page: Page;
    readonly EntitlementLocator : Locator;


    /**
     * Constructor initializing the locators
     * @param page A Playwright Page instance
     */

    constructor(page: Page){
        this.page = page;
       
        this.EntitlementLocator = page.locator('.oxd-input.oxd-input--active').nth(1);

    }

    // Methods for interacting with the  Page
    
    async selectDropdown(name: string){
        await this.page.getByText(name,{ exact : true}).click();
    }
    
    async enterNumberOfLeave(leaveNumber : string){
        await this.EntitlementLocator.fill(leaveNumber, {force:true});
    }
    




}





    
