const { test} = require("@playwright/test");
const {loginPage} = require('../pages/Login');



test('login page', async ({page})=>{

    const login = new loginPage(page);

    await login.goToLoginPage();

    await login.enterCredential();
    
    await login.loginButtonClicked();

    await login.validateLogin();

    await login.logout();

    
})