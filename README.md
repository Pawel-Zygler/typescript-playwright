# typescript-playwright project

### Setup:

1. git clone https://github.com/Pawel-Zygler/cucumber-playwright.git
2. go to root
3. `npm i` to install the dependencies
4. `npx playwright install` to install browsers
5. `npm run test` to execute tests

### Github Actions

Runs every day.

If commit message has 'regressionPlease' or 'smokePlease' then tests marked @regression or @smoke will only run.
