const { APIRequestContext } = require('@playwright/test');
const BaseAPI = require('./base-api');

/**
 * Service class for interacting with the Facts API endpoints.
 * @extends BaseAPI
 */
class FactsService extends BaseAPI {
    /**
     * @param {APIRequestContext} context - The Playwright API request context.
     */
    constructor(context) {
        super(context);
        /**
         * The URL for the facts service endpoint.
         * @type {string}
         */
        this.SERVICE_URL = `${this.BASE_URL}/facts`;
    }

    /**
     * Retrieves a fact about a breed.
     * @returns {Promise<Response>} - The response from the API request.
     */
    async getFactAboutBreed() {
        return this.context.get(this.SERVICE_URL);
    }

    /**
     * Retrieves the ID from a fact about a breed.
     * @returns {Promise<string>} - The ID extracted from the fact response.
     */
    async getIdFromFact() {
        let response = await this.getFactAboutBreed();
        let json = await response.json();
        return json.data[0].id;
    }
}

module.exports = FactsService;