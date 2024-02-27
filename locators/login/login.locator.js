const IloginLocator = {
    notifWeb: '(//button[normalize-space()="Nanti Saja"])[1]',
    OkButton: '//*[@id="driver-popover-item"]/div[4]/button',
    masukButton: '//button[@id="login-button"]',
    usernameInput: '(//input[@name="username"])[1]',
    passwordInput: '(//input[@name="password"])[1]',
    buttonSignIn: '//*[contains(@class, "qa-login-button")]',
    usernameText: '(//div[@class="text-neutral-50 font-bold tracking-wide body-text-3 cursor-pointer mr-4 ellipsis"])[1]',
    loginFailedToastMessage: '(//p[@class="message text-xs leading-normal font-bold"])[1]',
    infoBoxErrorEmail: '(//div[@class="help-text err-label text-xs tracking-wide text-semantic-error-high mt-2"])[1]'
}

module.exports = { IloginLocator } ;