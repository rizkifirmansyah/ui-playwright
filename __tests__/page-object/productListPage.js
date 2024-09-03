const { expect } = require('@playwright/test');
const { IPLPLocator }  =  require('../../locators/product/plp.locator.js');
const { pageFixture } = require('../hooks/pageFixture.js');

exports.productListPageObject = class productListPageObject {
    async filterMinAmountInput(minAmount) {
        await pageFixture.page.waitForTimeout(1000);
        await pageFixture.page.$eval(IPLPLocator.minAmountFilterField, el => el.scrollIntoView());
        const element = await pageFixture.page.waitForSelector(IPLPLocator.minAmountFilterField);    
        await element.fill(minAmount);
    }

    async filterMaxAmountInput(maxAmount) {
        const element = await pageFixture.page.waitForSelector(IPLPLocator.maxAmountFilterField);    
        await element.click();
        await element.fill(maxAmount);
    }

    async filterTerapkanButton() {
        const element = await pageFixture.page.waitForSelector(IPLPLocator.terapkanFilterButton);    
        await expect(element).toBeVisible();
        await element.click();
        await pageFixture.page.waitForTimeout(4000);
    }

    async chooseFirstProductOnList() {
        const element = await pageFixture.page.waitForSelector(IPLPLocator.product1onList);    
        await expect(await pageFixture.page.waitForSelector(IPLPLocator.product1onList)).toBeVisible();
        await element.click();
        await pageFixture.page.waitForTimeout(4000);
    }
}