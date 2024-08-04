const {Page, expect} = require('@playwright/test');

class TopBarMenu {
    page;

    constructor(page) {
        this.page = page;
    }

    getAllTopMenuOptions() {
        return this.page.locator("#menu-top-menu a[id*='menu-item-dropdown']");
    }

    getTopMenuOptionByName(menuOption) {
        return this.page.locator(`#menu-top-menu li[class*='menu-item-has-children']`).filter({has: this.page.locator(`a[title="${menuOption}"]`)});

    }

    getTopSubMenuOptionByName(subMenuOption) {
        return this.page.getByRole("link", {name: subMenuOption});
    }

    async clickSubMenuOption(menuOption, subMenuOption) {
        let subMenuOpt = await this.getTopSubMenuOptionByName(subMenuOption);
        let menuOpt = await this.getTopMenuOptionByName(menuOption);
        await menuOpt.hover();
        await subMenuOpt.waitFor({state: "visible"});
        await subMenuOpt.click();
        await this.page.waitForLoadState("load", {timeout: 60000});
    }

}

module.exports = TopBarMenu;