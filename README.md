# Sauce Demo UI Test (JavaScript)

This project contains an automated UI test for the Sauce Demo website using WebdriverIO with JavaScript.

## Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)
- Chrome browser
- ChromeDriver (will be installed automatically with the project dependencies)

## Setup

1. Clone this repository:
   ```
   git clone https://github.com/manishdroid/saucedemo-ui-test.git
   cd saucedemo-ui-test
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running Tests

To run the tests:

```
npm test
```

This command will:
1. Start the WebdriverIO test runner
2. Execute the test in `test/specs/saucedemo.test.js`
3. Display the test results in the console

## Test Report

WebdriverIO's spec reporter will display the test results directly in your console after the test run.
