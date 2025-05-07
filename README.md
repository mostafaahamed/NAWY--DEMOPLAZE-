## Playwright Tests – DemoBlaze

This is an automation testing project built using **Playwright** for the website [demoblaze.com](https://www.demoblaze.com/).  
It covers key test scenarios including:

- Login  
- Register  
- Place Order
- logout

The tests are structured using the **Page Object Model**, and each feature has its own folder containing:
- The test case file (`.spec.ts`)
- The page logic file (`.ts`)

### How to Run

```bash
npx playwright test
```

To run tests with the browser UI visible:

```bash
npx playwright test --headed
```

###  Videos

A folder containing videos is included to demonstrate the steps for each test case.