const BasePage = require('./base-page');
const TopBarMenu = require('../ui-componets/top-bar-menu');
const {Page} = require('@playwright/test');

class FeatureComparisonPage extends BasePage {
    constructor(page) {
        super(page);
        this.topBarMenu = new TopBarMenu(page);

    }
    getFeatureComparisonLbl() {
        return this.page.locator(".content h2");
    }
    getAllProductOptions() {
        return this.page.locator(".card-head h5");
    }
    getDownloadOnGithubLinks() {
        return this.page.getByRole("link",{name:"Download on GitHub"}).all();
    }
}

module.exports = FeatureComparisonPage;