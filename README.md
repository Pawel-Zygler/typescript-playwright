# typescript-playwright

### Setup:

1. git clone https://github.com/Pawel-Zygler/cucumber-playwright.git
2. go to root
3. `npm i` to install the dependencies
4. `npx playwright install` to install browsers
5. `npm run test` to execute tests

### Github Actions

Tests are sheduled to run every night. With report at the end.

How to launch regression or smoke test suite only?

If commit message has 'regressionPlease' or 'smokePlease' then tests marked @regression or @smoke will run. Regular, full, suite will not run if one of those suites is launched in CI/CD by committing such msg "Patch for checkout and regressionPlease."
