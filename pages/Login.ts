import { expect, type Locator, type Page } from '@playwright/test';

import {base} from '../test_data/data.json';
class loginPage{

    readonly page: Page;
    readonly usernameLocator:Locator;
    readonly passwordLocator:Locator;
    readonly loginButtonLocator:Locator;
    readonly loginedValidateLocator:Locator;
    readonly logoutDropdownLocator:Locator;
    //readonly profileDropdownButton:Locator;
    readonly logoutLocator : Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameLocator = page.getByPlaceholder('Username');
        this.passwordLocator = page.getByPlaceholder('Password');
        this.loginButtonLocator = page.getByRole('button',{name : 'Login'});
        this.loginedValidateLocator = page.getByRole('heading', { name: 'Dashboard' });
        //this.profileDropdownButton= page.getByAltText('profile picture');
        this.logoutDropdownLocator = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.logoutLocator  = page.getByText('Logout' , {exact : true});

    }

    async goToLoginPage(){
        console.log(base);
        await this.page.goto(base.url);
    }

    async enterCredential(){
        
        await this.usernameLocator.fill(base.username);
        await this.passwordLocator.fill(base.password);
        
    }

    async loginButtonClicked(){
        this.loginButtonLocator.click();
    }

    async validateLogin(){
        await expect.soft(this.loginedValidateLocator).toBeVisible();
        
    }

    async logout(){
        await this.logoutDropdownLocator.click();
        await this.logoutLocator.click();
        
    }

    async Assertlogout(){
        await expect(this.page.url()).toContain('login');
        
    }

}

module.exports = {loginPage};
