# Reproduction case for Cypress #27113

## Instructions

1. Clone repo & install dependencies `npm i`
2. Run tests using `npx cypress run` - observe `allure-results` directory is created
3. Delete `allure-results` directory
4. Install cypress 12.16.0 `npm i -D cypress@12.16.0`
5. Re-run tests, observe `allure-results` directory is *not* created

## License

MIT