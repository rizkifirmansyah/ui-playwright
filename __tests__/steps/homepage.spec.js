const { homePageObject } = require('../page-object/homepage.js');
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('I navigate to Product List Page', async () => {
    const po = new homePageObject();
    await po.semuaKoleksiButton();
});
