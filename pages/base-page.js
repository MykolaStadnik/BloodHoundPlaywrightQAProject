const {Page} = require('@playwright/test');

class BasePage {
    page;
    constructor(page) {
    this.page = page;
    }
    async navigateToHomePage(){
       await this.page.goto(process.env.URL);
       await this.page.waitForLoadState('load',{timeout: 30000});
    }
}
module.exports = BasePage;