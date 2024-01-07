Feature: Login and authentication

Scenario: Logging in as a standard user
Given a user is on the login page
When enters "<userType>" and "<password>"
Then the user is redirected to the dashboard

Examples: 
| userType                  | password       |
| standard_user         | secret_sauce   |
| problem_user          | secret_sauce   |
| performance_glitch_user | secret_sauce |
| error_user            | secret_sauce   |
| visual_user           | secret_sauce   |