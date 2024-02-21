// basePage.ts

import { type Page } from '@playwright/test';
import { Global } from './GlobalVal';


export class BasePage {
 

  static async getUsernameFromDom(page: Page): Promise<void> {
    
    Global.username = await page.locator('.oxd-userdropdown-name').textContent();
  }
}
