const IPaymentPageLocator = {
    vaPaymentOption: '(//div[@data-testid="payment-item-VirtualAccount"])',
    tfBankPaymentOption: '//div[@data-testid="payment-item-Transfer"]',
    paymentOptionVABCARadio: '//input[@data-testid="radio-bank-VABCA"]',
    orderSekarangButton: '//button[normalize-space()="order sekarang"]'
}

module.exports = { IPaymentPageLocator };