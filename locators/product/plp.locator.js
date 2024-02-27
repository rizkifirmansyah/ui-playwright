const IPLPLocator = {
    minAmountFilterField: '//input[@data-testid="filter-input-price-min"]',
    maxAmountFilterField: '//input[@data-testid="filter-input-price-max"]',
    terapkanFilterButton: '//button[@data-testid="filter-input-submit"]',
    product1onList: '//*[contains(@class, "qa-product-card-0") and @data-testid="product-card"]',
    product1AmountText: '(//div[@class="py-2 px-4 mt-4 pb-4"])[1]/div[1]]',
}

module.exports = { IPLPLocator } ;