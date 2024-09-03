const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const { BeforeAll, AfterAll, setDefaultTimeout, After, Before } = require('@cucumber/cucumber');
const { IloginLocator }  =  require('../../locators/login/login.locator.js');
const { pageFixture } = require('../hooks/pageFixture.js');

require('dotenv').config();

setDefaultTimeout(30000);

exports.loginPageObject = class loginPageObject {
    async openURL() {
        await pageFixture.page.goto(process.env.URL);
    }

    async NotifWeb() {
        await pageFixture.page.$eval(IloginLocator.notifWeb, (element) => {
          element.style.display = 'block';
        });
        const element = await pageFixture.page.waitForSelector(IloginLocator.notifWeb);
        await element.click();
    }

    async OkButton() {
        // Make the element visible by modifying its style
        await pageFixture.page.$eval(IloginLocator.OkButton, (element) => {
          element.style.display = 'block';
        });
      
        // Now, you can interact with the element
        const element = await pageFixture.page.waitForSelector(IloginLocator.OkButton);
        await element.click();
    }

    async masukButton() {
        await pageFixture.page.$eval(IloginLocator.masukButton, (element) => {
            element.style.display = 'block';
        });
        const element = await pageFixture.page.waitForSelector(IloginLocator.masukButton);
        await element.click();
    }

    async inputEmail(email) {
        await pageFixture.page.$eval(IloginLocator.usernameInput, (element) => {
            element.style.display = 'block';
        });
        const element = await pageFixture.page.waitForSelector(IloginLocator.usernameInput);
        await element.click();
        await element.fill(email);
    }

    async inputPassword(password) {
        await pageFixture.page.$eval(IloginLocator.passwordInput, (element) => {
            element.style.display = 'block';
        });
        const element = await pageFixture.page.waitForSelector(IloginLocator.passwordInput);
        await element.click();
        await element.fill(password);
    }

    async clickSignInButton() {
        await pageFixture.page.waitForTimeout(4000);
        await pageFixture.page.$eval(IloginLocator.buttonSignIn, (element) => {
            element.style.display = 'block';
        });
        const element = await pageFixture.page.waitForSelector(IloginLocator.buttonSignIn);
        await element.click();
    }

    async checkSignInButtonDisable() {
        const btn = await pageFixture.page.locator(IloginLocator.buttonSignIn);
        await expect(btn).toBeDisabled();
    }

    async checkProfileNameText() {
        const Title = await pageFixture.page.locator(IloginLocator.usernameText).textContent();
        // element
        return Title
    }

    async errorLoginNotification() {
        await pageFixture.page.waitForTimeout(2000);
        await pageFixture.page.$eval(IloginLocator.loginFailedToastMessage, (element) => {
            element.style.display = 'block';
        });
        const element = await pageFixture.page.waitForSelector(IloginLocator.loginFailedToastMessage);
        return element.textContent();
    }

    async errorFormatEmail(){
        await pageFixture.page.waitForTimeout(2000);
        await pageFixture.page.$eval(IloginLocator.infoBoxErrorEmail, (element) => {
            element.style.display = 'block';
        });
        const element = await pageFixture.page.waitForSelector(IloginLocator.infoBoxErrorEmail);
        return element.textContent();
    }
}