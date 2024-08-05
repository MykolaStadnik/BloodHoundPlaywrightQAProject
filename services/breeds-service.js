const {APIRequestContext} = require('@playwright/test');
const BaseAPI = require('./base-api')

class BreedsService extends BaseAPI {
    constructor(context) {
        super(context);
        this.SERVICE_URL = `${this.BASE_URL}/breeds`;
    }

    async getAllBreeds() {
        return this.context.get(this.SERVICE_URL);
    }
    async getBreedById(id){
        return this.context.get(`${this.SERVICE_URL}/${id}`);
    }

    async getAllBreedIds(){
       let response =  await this.getAllBreeds();
       let json = await response.json();
       let allIds = [];
        for (let each of json.data) {
            allIds.push(each.id);
        }
        return allIds;
    }

}

module.exports = BreedsService;