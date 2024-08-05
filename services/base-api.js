const {APIRequestContext} = require('@playwright/test');

class BaseAPI {
    context;

    constructor(context) {
        this.context = context;
        this.BASE_URL = process.env.API_BASE_URL;
    }

}

module.exports = BaseAPI;