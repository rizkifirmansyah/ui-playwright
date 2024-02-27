const ICartPageLocator = {
    totalBelanjaText: '(//div[@class="text-sm md:text-xl font-black"])[1]',
    lanjutkanButton: '(//button[@data-testid="cart-btn-summary-cta"])',
    isiAlamatButton: '//button[normalize-space()="Isi alamat"]',
    cityDistrictInput: '//input[@aria-label="City or district"]',
    selectedFirstRowDDL: '(//div[@data-testid="input-dropdown"])[1]/ul/li',
    postalCodeInput: '(//input[@aria-label="Postal code"])[1]',
    detailAddressInput: '//textarea[@aria-label="Address detail"]',
    simpanButton: '//button[normalize-space()="Simpan"]'
}

module.exports = { ICartPageLocator };