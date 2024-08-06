const { APIRequestContext } = require('@playwright/test');

/**
 * Base class for handling API requests with Playwright.
 */
class BaseAPI {
    /**
     * @param {APIRequestContext} context - The Playwright API request context.
     */
    constructor(context) {
        /**
         * The Playwright API request context.
         * @type {APIRequestContext}
         */
        this.context = context;

        /**
         * The base URL for API requests, loaded from environment variables.
         * @type {string}
         */
        this.BASE_URL = process.env.API_BASE_URL;
    }
}

module.exports = BaseAPI;