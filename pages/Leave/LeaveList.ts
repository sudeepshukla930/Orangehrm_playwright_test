import { expect, type Locator, type Page } from '@playwright/test';


exports.LeaveListPage = class LeaveListPage {

    readonly page: Page;
    readonly inputFieldLocator:Locator;
    readonly listBoxDiv : Locator;
    readonly selectFromDropdownLocator : Locator;
    readonly subTypeLocator : Locator;
    readonly pastEmployeeLocator : Locator;


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





    
