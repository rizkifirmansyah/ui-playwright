const { chromium } = require('playwright');
const { Before, After } = require("@cucumber/cucumber");
const { pageFixture } = require("./pageFixture.js");
require('dotenv').config();

let browser;
let page;

Before(async () => {
    browser = await chromium.launch({headless:false, args:['--start-maximized']});
    const context = await browser.newContext({ viewport: null})
    page = await context.newPage();
    pageFixture.page = page;
});

After(async () => {
    await pageFixture.page.close();
    await browser.close();  
});