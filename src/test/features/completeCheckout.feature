Feature: Checkout

Scenario: Complete checkout e2e
Given a user is on the login page
When enters "<userType>" and "<password>"
Then the user is redirected to the dashboard
When added a product to cart
When goes to cart
Then should see Your Cart title with selected product
When clicks Checkout should see checkout: your information form
When submits personal data correctly by clicking Continue
Then should see checkout overview page with selected product
Then should see item prices are correct using price verification method
When clicks Finish
Then the order success screen is displayed

Examples: 
| userType                  | password       |
| standard_user         | secret_sauce   |
| problem_user          | secret_sauce   |
| performance_glitch_user | secret_sauce |
| error_user            | secret_sauce   |
| visual_user           | secret_sauce   |