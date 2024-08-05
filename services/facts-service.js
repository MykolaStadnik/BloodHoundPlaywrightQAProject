const {APIRequestContext} = require('@playwright/test');
const BaseAPI = require('./base-api')

class FactsService extends BaseAPI {
    constructor(context) {
        super(context);
        this.SERVICE_URL = `${this.BASE_URL}/facts`;
    }

    async getFactAboutBreed(){
        return this.context.get(this.SERVICE_URL);
    }

    async getIdFromFact(){
      let response = await this.getFactAboutBreed();
      let json = await response.json();
      return json.data[0].id;

    }

}
module.exports = FactsService;