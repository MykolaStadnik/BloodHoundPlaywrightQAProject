const HomePage = require('../pages/home-page');
const FeatureComparisonPage = require('../pages/feature-comparison-page');
const {test, expect} = require('@playwright/test');

let homePage
test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
});

test('Home page loading successfully',{tag: ['@ui',"@smoke"],}, async () => {
    await expect(homePage.page).toHaveTitle("Attack Path Management Solution | BloodHound Enterprise");
});
test('Top bar menu options are present',{tag: ['@ui',"@smoke"],}, async () => {
    let expectedMenuBarOptions = ["Product", "Solutions", "Partners", "Resources"];
    await expect(homePage.topBarMenu.getAllTopMenuOptions()).toHaveText(expectedMenuBarOptions)

});
test('Feature comparison page loading successfully',{tag: ['@ui',"@smoke"],}, async () => {
    const featureComparisonPage = new FeatureComparisonPage(homePage.page);
    await homePage.topBarMenu.clickSubMenuOption("Product", "BloodHound Feature Comparison");
    await expect(featureComparisonPage.getFeatureComparisonLbl()).toBeVisible();
});
test('Product options are available on feature comparison page',{tag: ['@ui',"@smoke"],}, async () => {
    let featureComparisonPage;
    await test.step('Navigate to Feature Comparison Page', async () => {
        featureComparisonPage = new FeatureComparisonPage(homePage.page);
        await homePage.topBarMenu.clickSubMenuOption("Product", "BloodHound Feature Comparison");
    });
    await test.step('Validate product options', async () => {
        let expectedProductOptions = ["BloodHound Legacy", "BloodHound CE", "BloodHound Enterprise"];
        await expect(featureComparisonPage.getAllProductOptions()).toHaveText(expectedProductOptions);
    });
    await test.step('Validate GitHub links are working as expected', async () => {
        let allDownloadOnGithubLinks = await featureComparisonPage.getDownloadOnGithubLinks();
        for (const link of allDownloadOnGithubLinks) {
            await link.click();
            await featureComparisonPage.page.waitForLoadState('load', {timeout: 30000});
            await expect(featureComparisonPage.page).toHaveURL(/github\.com/);
            await featureComparisonPage.page.goBack({waitUntil: "load"});
        }
    });
});

