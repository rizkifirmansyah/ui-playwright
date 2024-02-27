Feature: Chekcout

@checkout
Scenario: As a User I should be able to Checkout Product with specification: products price under Rp.10.000.000
Given I have logged in
When I navigate to Product List Page
And I filter products by price between "0" and "10000000"
# And I verify the Product Amount of the first Product on Product List is under "10000000"
And I choose the first Product on Product List
# And I click Beli Sekarang Button on Product Detail Page
# And I verify the Product Amount on Cart Page is still under "10000000"
# And I click Lanjutkan Button on Cart Page
# And I click Pilih Pembayaran Button on Shipping page
# And I choose VA BCA as my Payment Option
# And I click Order Sekarang Button
# Then I navigate to Waiting for Payment Page and see several information about my order
