const { APIRequestContext } = require('@playwright/test');
const BaseAPI = require('./base-api');

/**
 * Service class for interacting with the Breeds API endpoints.
 * @extends BaseAPI
 */
class BreedsService extends BaseAPI {
    /**
     * Creates an instance of BreedsService.
     * @param {APIRequestContext} context - The Playwright API request context.
     */
    constructor(context) {
        super(context);
        /**
         * The URL for the breeds service endpoint.
         * @type {string}
         */
        this.SERVICE_URL = `${this.BASE_URL}/breeds`;
    }

    /**
     * Retrieves all breeds.
     * @returns {Promise<Response>} - The response from the API request.
     */
    async getAllBreeds() {
        return this.context.get(this.SERVICE_URL);
    }

    /**
     * Retrieves a breed by its ID.
     * @param {string} id - The ID of the breed to retrieve.
     * @returns {Promise<Response>} - The response from the API request.
     */
    async getBreedById(id) {
        return this.context.get(`${this.SERVICE_URL}/${id}`);
    }

    /**
     * Retrieves all breed IDs.
     * @returns {Promise<string[]>} - A list of all breed IDs.
     */
    async getAllBreedIds() {
        let response = await this.getAllBreeds();
        let json = await response.json();
        let allIds = [];
        for (let each of json.data) {
            allIds.push(each.id);
        }
        return allIds;
    }
}

module.exports = BreedsService;