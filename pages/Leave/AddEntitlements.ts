import { expect, type Locator, type Page } from '@playwright/test';


exports.AddEntitlementsPage = class AddEntitlementsPage {

    readonly page: Page;
    readonly EntitlementLocator : Locator;


    constructor(page: Page){
        this.page = page;
       
        this.EntitlementLocator = page.locator('.oxd-input.oxd-input--active').nth(1);

    }
    
    async selectDropdown(name: string){
        await this.page.getByText(name,{ exact : true}).click();
    }
    
    async enterNumberOfLeave(leaveNumber : string){
        await this.EntitlementLocator.fill(leaveNumber, {force:true});
    }
    




}





    
