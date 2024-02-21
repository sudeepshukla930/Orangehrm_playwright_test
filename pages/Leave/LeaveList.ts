// Importing the necessary modules and types

import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Class representing the Leave List page actions
 */

exports.LeaveListPage = class LeaveListPage {
     
    // Declaring class properties

    readonly page: Page;
    readonly inputFieldLocator:Locator;
    readonly listBoxDiv : Locator;
    readonly selectFromDropdownLocator : Locator;
    readonly subTypeLocator : Locator;
    readonly pastEmployeeLocator : Locator;
    
    
    /**
     * Constructor initializing the locators
     * @param page A Playwright Page instance
     */


    constructor(page: Page){
        this.page = page;
        this.inputFieldLocator = page.getByPlaceholder('Type for hints...');
        this.listBoxDiv = page.getByRole("listbox");
        this.selectFromDropdownLocator = this.listBoxDiv
                                             .getByRole("option")
                                             .locator('span')
    
        this.subTypeLocator =  page.getByText('-- Select --').nth(1);
        this.pastEmployeeLocator = page.getByRole('checkbox').first();

    }
    


    // Methods for interacting with the  Page


    async EnterName(name:string){
        await this.inputFieldLocator.fill(name);

    }

    async nameSuggestionListClick(){

        
        await this.selectFromDropdownLocator.nth(0).waitFor({state: "visible"});
        await this.selectFromDropdownLocator.nth(0).click();

    }

    async subTypeSelect(name:string){

        await this.subTypeLocator.click();

        await this.selectFromDropdownLocator.getByText(name).waitFor({state: "visible"});
       await  this.selectFromDropdownLocator.getByText(name).click();
    }

    async pastEmployeeClick(){

        await this.pastEmployeeLocator.click();
    }




}





    
