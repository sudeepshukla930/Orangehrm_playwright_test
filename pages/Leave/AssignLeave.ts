import { expect, type Locator, type Page } from '@playwright/test';


exports.AssignLeavePage = class AssignLeavePage {

    readonly page: Page;
    readonly commentLocator: Locator;


    constructor(page: Page){
        this.page = page;
       this.commentLocator =page.locator('.oxd-input-group textarea');


    }
    
    async typeComment(comment: string){
        await this.commentLocator.fill(comment);
    }
    
    




}





    
