const { Page } = require('@playwright/test');

/**
 * BasePage class provides common methods for page interaction.
 */
class BasePage {
    /**
     * The Playwright page object.
     * @type {Page}
     */
    page;

    /**
     * Constructor for BasePage class.
     * @param {Page} page - The Playwright page object.
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * Navigates to the home page defined by the URL environment variable.
     * Waits for the page to fully load with a timeout of 30 seconds.
     * @returns {Promise<void>}
     */
    async navigateToHomePage() {
        await this.page.goto(process.env.URL);
        await this.page.waitForLoadState('load', { timeout: 30000 });
    }
}

module.exports = BasePage;