
// Importing the necessary modules and types

import { expect, type Locator, type Page } from '@playwright/test';


// Exporting the dashboardPage class

exports.dashboardPage = class dashboardPage{

    // Defining class properties

    readonly page : Page;
    readonly NavLinkLocator : Locator;
    readonly assertNavLinkName: string;

    // Defining the constructor function

    constructor(page:Page,NavLinkName: string){
        this.page = page;

         // Setting the assertNavLinkName property based on the NavLinkName parameter
        this.assertNavLinkName = (NavLinkName === 'My Info') ? 'empNumber' : NavLinkName.toLowerCase();

        // Setting the NavLinkLocator property based on the NavLinkName parameter
        this.NavLinkLocator = (NavLinkName === 'Time') ? page.getByRole('link', { name: 'Time' }) : page.getByText(NavLinkName, { exact: true });
    }


     // Defining the dynamicDashboardNavigation function
     
    async dynamicDashboardNavigation() {

       await this.NavLinkLocator.click();

       await expect(this.page.url()).toContain(this.assertNavLinkName);
       
       

        
        
    }
}