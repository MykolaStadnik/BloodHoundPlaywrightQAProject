const BasePage = require('./base-page');
const TopBarMenu = require('../ui-componets/top-bar-menu');
const {Page} = require('@playwright/test');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.topBarMenu = new TopBarMenu(page);

    }
}

module.exports = HomePage;