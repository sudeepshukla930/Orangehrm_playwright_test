import { expect, type Locator, type Page } from '@playwright/test';

exports.dashboardPage = class dashboardPage{

    readonly page : Page;
    readonly NavLinkLocator : Locator;
    readonly assertNavLinkName: string;

    constructor(page:Page,NavLinkName: string){
        this.page = page;
        //this.NavLinkLocator = page.locator('[class="oxd-main-menu"]>li>a>span');
       // this.assertNavName = '';
        this.assertNavLinkName = (NavLinkName === 'My Info') ? 'empNumber' : NavLinkName.toLowerCase();
        this.NavLinkLocator = (NavLinkName === 'Time') ? page.getByRole('link', { name: 'Time' }) : page.getByText(NavLinkName, { exact: true });
    }

    async dynamicDashboardNavigation() {
       //await this.page.waitForTimeout(3000);
       //const counter = await this.NavLinkLocator.count();
       await this.NavLinkLocator.click();

       await expect(this.page.url()).toContain(this.assertNavLinkName);
       //await this.page.waitForTimeout(3000);
       

        
        
    }
}