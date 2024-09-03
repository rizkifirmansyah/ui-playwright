const { expect } = require('@playwright/test');
const { IHomepageLocator }  =  require('../../locators/homepage/homepage.locator.js');
const { pageFixture } = require('../hooks/pageFixture.js');

exports.homePageObject = class homePageObject {
    async semuaKoleksiButton() {
        await pageFixture.page.waitForTimeout(1000);
        await pageFixture.page.$eval(IHomepageLocator.semuaKoleksiButton, el => el.scrollIntoView());
        await pageFixture.page.waitForTimeout(2000);
        const element = await pageFixture.page.waitForSelector(IHomepageLocator.semuaKoleksiButton);    
        await element.click();
    }
}