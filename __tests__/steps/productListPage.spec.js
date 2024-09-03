const { productListPageObject } = require('../page-object/productListPage.js');
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('I filter products by price between {string} and {string}', async (min, max) => {
    const po = new productListPageObject();
    await po.filterMinAmountInput(min);
    await po.filterMaxAmountInput(max);
    await po.filterTerapkanButton();
});

When('I choose the first Product on Product List', async () => {
    const po = new productListPageObject();
})

