const BasePage = require('./base-page');
const TopBarMenu = require('../ui-componets/top-bar-menu');
const { Page } = require('@playwright/test');

/**
 * HomePage class represents the home page and its elements.
 * It extends BasePage and provides methods to interact with the page.
 */
class HomePage extends BasePage {
    /**
     * Constructor for HomePage class.
     * Initializes the topBarMenu component.
     * @param {Page} page - The Playwright page object.
     */
    constructor(page) {
        super(page);
        /**
         * Instance of TopBarMenu for interacting with the top bar menu.
         * @type {TopBarMenu}
         */
        this.topBarMenu = new TopBarMenu(page);
    }
}

module.exports = HomePage;