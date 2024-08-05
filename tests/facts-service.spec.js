const FactsService = require('../services/facts-service');
const BreedService = require('../services/breeds-service')
const {test, expect} = require('@playwright/test');


let factsService;

test.beforeEach(async ({request}) => {
    factsService = new FactsService(request);
});

test('Verify facts service is up and running', {tag: ['@api', "@smoke"],}, async ({}) => {
    let response = await factsService.getFactAboutBreed();
    await expect(response).toBeOK();
});

test('Verify facts service returns body attribute', {tag: ['@api', "@smoke"],}, async ({}) => {
    let response = await factsService.getFactAboutBreed();
    let json = await response.json();
    expect(json.data[0].attributes.body).not.toBeNull();
});

test('Unable to retrieve breed information by id from fact service', {tag: ['@api', "@smoke"],}, async ({}) => {
    const breedService = new BreedService(factsService.context);
    let id = await factsService.getIdFromFact();
    let response = await breedService.getBreedById(id);
    await expect(response).not.toBeOK();
});