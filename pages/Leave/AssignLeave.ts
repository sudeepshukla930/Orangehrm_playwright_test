
// Importing the necessary modules and types

import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Class representing the Assign Leave Page actions
 */
exports.AssignLeavePage = class AssignLeavePage {

    readonly page: Page;
    readonly commentLocator: Locator;

    /**
     * Constructor initializing the locators
     * @param page A Playwright Page instance
     */

    constructor(page: Page){
        this.page = page;
       this.commentLocator =page.locator('.oxd-input-group textarea');


    }

        // Methods for interacting with the  Page

    
    async typeComment(comment: string){
        await this.commentLocator.fill(comment);
    }
    
    




}





    
