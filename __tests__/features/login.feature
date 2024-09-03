Feature: Login

@login
Scenario: As a User, I should be able to login with valid credentials
Given I am on Dashboard Page
When I click Masuk Button on Homepage
And I input email address "email"
And I input password "pass"
And I click Login button
Then I go to Dashboard page

Scenario: As a User, I should not be able to login with invalid password
Given I am on Dashboard Page
When I click Masuk Button on Homepage
And I input email address "email"
And I input password "pass"
And I click Login button
And I click Izinkan on pop up
Then I get error message "Ups, email atau password kamu salah"

Scenario: As a User, I should not be able to login with invalid format Email
Given I am on Dashboard Page
When I click Masuk Button on Homepage
And I input email address "email"
Then I get error format message "Hmm, format email salah. Cek lagi yuk!"
And I see Login Button is disable

Scenario: As a User, I should not be able to login when I leave the username or password fields empty
Given I am on Dashboard Page
When I click Masuk Button on Homepage
Then I see Login Button is disable