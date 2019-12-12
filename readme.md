# Rouse Exercise

DuckDuckGo Test Cases for Rouse

## Installation

Clone rouse-demo repo locally from the `master` branch into an empty folder

```bash 
git clone https://github.com/andresconejo/rouse-demo.git
```
Install [node.js](https://nodejs.org/en/download/) (if not previously installed)

## Test Execution

Execute all tests in the exercise with default arguments
```bash
npm run test
```

Execute all tests in the exercises in parallel
```bash
npm run test --  --parallel true
```

Execute all tests inside a specific test file
```bash
npm run test -- --spec ./tests/settingsPage.test.js
```
```bash
npm run test -- --spec ./tests/searchPage.test.js
```
```bash
npm run test -- --spec ./tests/resultsPage.test.js
```

Execute different test files in parallel
```bash
npm run test -- --spec ./tests/settingsPage.test.js ./tests/searchPage.test.js --parallel true
```

## Project Structure

 .
    ├── data                    # Data or constant variables that can be re-used
    ├── pages                   # Specific page objects, page selectors, page functions
    ├── tests                   # Specific page tests
    ├── package.json            # Package manager
    ├── wdio.conf.js            # WebdriverIO configuration file
    └── README.md