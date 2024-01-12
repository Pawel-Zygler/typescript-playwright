# typescript-playwright

### Setup:

1. git clone https://github.com/Pawel-Zygler/typescript-playwright
2. go to root
3. `npm i` to install the dependencies
4. `npx playwright install` to install browsers
5. `npm run test` to execute tests
6. `npm run test --ui` to execute tests with ui

### CI/CD Integration

Tests are sheduled to run every night. With report at the end.

How to launch regression or smoke test suite only via script or commit?

1. `npm run test:regression` to launch regression suite
2. `npm run test:smoke` to launch smoke suite

Also, if commit message has 'regressionPlease' or 'smokePlease' then tests marked @regression or @smoke will run. Regular, full, suite will not run if one of those suites is launched in CI/CD by committing for instance such message "Patch for checkout and regressionPlease."
