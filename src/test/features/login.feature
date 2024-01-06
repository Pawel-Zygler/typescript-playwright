Feature: Login and authentication

Scenario: Logging in as a standard user
Given a standard user is on the login page
When the user enters "standard_user" and "secret_sauce"
Then the user is redirected to the dashboard 
Then sees a product header loaded within one second

Scenario: Logging in as a locked out user
Given a locked out user is on the login page
When the locked user enters "locked_out_user" and "secret_sauce"
Then the user receives a message about the account being locked

Scenario: Logging in as a performance glitch user
Given a performance glitch user is on the login page
When the glitched user enters "performance_glitch_user" and "secret_sauce"
Then the page loads on time
