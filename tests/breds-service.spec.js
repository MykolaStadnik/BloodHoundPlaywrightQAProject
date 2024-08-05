const BreedService = require('../services/breeds-service');
const {test, expect} = require('@playwright/test');

let breedsService;

test.beforeEach(async ({request}) => {
    breedsService = new BreedService(request);
});


test('Verify breed service up and running', {tag: ['@api', "@smoke"],}, async ({}) => {
    await expect(await breedsService.getAllBreeds()).toBeOK();
});


test('Verify each breed contains id', {tag: ['@api', "@smoke"],}, async ({}) => {

    let allIds = await breedsService.getAllBreedIds();
    for (let each of allIds) {
        expect(each).not.toBeNull();
    }
});

test('Verify each breed can be retrieved by id ', {tag: ['@api', "@smoke"],}, async ({}) => {

    let allIds = await breedsService.getAllBreedIds();
    for (let each of allIds) {
        let response = await breedsService.getBreedById(each);
        await expect(response).toBeOK();
    }
});