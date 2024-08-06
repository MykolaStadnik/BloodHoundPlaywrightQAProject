const BasePage = require('./base-page');
const TopBarMenu = require('../ui-componets/top-bar-menu');
const { Page , Locator} = require('@playwright/test');

/**
 * FeatureComparisonPage class represents the feature comparison page and its elements.
 * It extends BasePage and provides methods to interact with the page.
 */
class FeatureComparisonPage extends BasePage {
    /**
     * Constructor for FeatureComparisonPage class.
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
    getFeatureComparisonLbl() {
        return this.page.locator(".content h2");
    }
    getAllProductOptions() {
        return this.page.locator(".card-head h5");
    }

    /**
     * Retrieves all the "Download on GitHub" links.
     * @returns {Promise<Locator[]>} A promise that resolves to an array of locators for the links.
     */
    getDownloadOnGithubLinks() {
        return this.page.getByRole("link", { name: "Download on GitHub" }).all();
    }
}

module.exports = FeatureComparisonPage;