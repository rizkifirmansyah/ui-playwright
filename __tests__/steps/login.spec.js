const { loginPageObject } = require('../page-object/login.js');
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I have logged in', async () => {
    const po = new loginPageObject();
    await po.openURL();
    await po.OkButton();
    await po.masukButton();
    await po.inputEmail("email");
    await po.inputPassword("pass");
    await po.clickSignInButton();
    const Title = await po.checkProfileNameText();
    expect(Title).toMatch('Riz Fir');
});

Given('I am on Dashboard Page', async () => {
    const po = new loginPageObject();
    await po.openURL();
});

When('I click Masuk Button on Homepage', async () => {
    const po = new loginPageObject();
    await po.OkButton();
    await po.masukButton();
});

When('I input email address {string}', async (email) => {
    const po = new loginPageObject();
    await po.inputEmail(email);
});

When('I input password {string}', async (password) => {
    const po = new loginPageObject();
    await po.inputPassword(password);
});

When('I click Login button', async () => {
    const po = new loginPageObject();
    await po.clickSignInButton();
});

When('I click Izinkan on pop up', async () => {
    const po = new loginPageObject();
    await po.NotifWeb();
});

Then('I go to Dashboard page', async () => {
    const po = new loginPageObject();
    const Title = await po.checkProfileNameText();
    expect(Title).toMatch('Riz Fir');
});

Then('I get error message {string}', async (notification) => {
    const po = new loginPageObject();
    const msg = await po.errorLoginNotification();
    expect(msg).toMatch(notification);
});

Then('I get error format message {string}', async (errorMessage) => {
    const po = new loginPageObject();
    const msg = await po.errorFormatEmail();
    expect(msg).toMatch(errorMessage);
});

Then('I see Login Button is disable', async () => {
    const po = new loginPageObject();
    await po.checkSignInButtonDisable();
});
