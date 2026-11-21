# Web Automation Framework

End-to-end test automation framework built with **Playwright + TypeScript**, using the **Page Object Model**. Demonstrated on [SauceDemo](https://www.saucedemo.com), a public practice e-commerce site.

![Playwright Tests](https://github.com/YOUR_USERNAME/web-automation-framework/actions/workflows/playwright.yml/badge.svg)

## Tech Stack

| Tool | Purpose |
|---|---|
| Playwright | Browser automation and assertions |
| TypeScript | Type-safe test code |
| Node.js | Runtime |
| dotenv | Environment configuration |
| GitHub Actions | Continuous Integration |

## Test Case Matrix

| ID | Title | Area | Suite | Spec file | Status |
|---|---|---|---|---|---|
| TC-LOGIN-01 | Valid user can log in and see the product list | Login | Smoke | `tests/smoke/TC-01-legit-login.spec.ts` | Automated |
| TC-LOGIN-02 | Wrong password shows an error and blocks login | Login | Regression | `tests/regression/login-negative.spec.ts` | Automated |
| TC-LOGIN-03 | Locked out user cannot log in | Login | Regression | `tests/regression/login-negative.spec.ts` | Automated |
| TC-LOGIN-04 | Empty username shows a validation error | Login | Regression | `tests/regression/login-negative.spec.ts` | Automated |
| TC-LOGIN-05 | Empty password shows a validation error | Login | Regression | `tests/regression/login-negative.spec.ts` | Automated |
| TC-CART-01 | Product can be added to the cart | Cart | Smoke | `tests/smoke/cart.spec.ts` | Automated |
| TC-CART-02 | Product can be removed from the cart | Cart | Regression | `tests/regression/cart-remove.spec.ts` | Automated |
| TC-AUTH-01 | Logged in user can log out | Auth | Smoke | `tests/smoke/logout.spec.ts` | Automated |

**Summary:** 8 test cases, 3 smoke and 5 regression.

**Smoke** tests cover critical paths and run fast. **Regression** tests cover negative scenarios and edge cases.

## Project Structure

```
web-automation-framework/
├── tests/
│   ├── smoke/              # Critical-path tests
│   └── regression/         # Negative and edge-case tests
├── pages/                  # Page Objects (all locators live here)
├── fixtures/               # Custom Playwright fixtures (e.g. pre-logged-in page)
├── constants/              # Routes, messages, timeouts, test data
├── utils/                  # Helpers (e.g. getEnv)
├── .github/workflows/      # CI pipeline
├── playwright.config.ts
├── tsconfig.json
└── .env.example
```

## Design Decisions

- **Page Object Model:** no locators in spec files. If the UI changes, only the Page Object changes.
- **Fixtures:** the logged-in precondition is set up once in a fixture, not copied into every test.
- **Independent tests:** every test starts from a fresh page and can run in any order.
- **Web-first assertions:** no fixed sleeps. Playwright auto-waits and retries.
- **No hardcoded config:** URLs and credentials come from `.env`, and constants replace magic strings.
- **Fail-fast config:** `getEnv()` throws a clear error if a variable is missing.

## Getting Started (Windows 11)

**Prerequisites:** Node.js 20+ and Git.

```powershell
git clone https://github.com/YOUR_USERNAME/web-automation-framework.git
cd web-automation-framework
npm install
npx playwright install
copy .env.example .env
```

## Running Tests

| Command | What it does |
|---|---|
| `npm test` | Run all tests on all browsers |
| `npm run test:smoke` | Run smoke tests only |
| `npm run test:regression` | Run regression tests only |
| `npm run test:headed` | Run with a visible browser |
| `npx playwright test --project=chromium` | Run on Chromium only |
| `npm run typecheck` | TypeScript type check |

## Viewing the Report

```powershell
npm run report
```

Opens the HTML report. On failure, screenshots, videos and traces are saved under `test-results/`. To inspect a trace:

```powershell
npx playwright show-trace path\to\trace.zip
```

## Continuous Integration

Tests run automatically on every push and pull request via GitHub Actions. The HTML report is uploaded as a build artifact.

## Roadmap

- [ ] Extract a shared `HeaderComponent` (cart badge, menu)
- [ ] Add checkout flow tests
- [ ] Add data-driven tests for multiple user types
- [ ] Add visual comparison tests

## Author

**Sadman**, CSE student, AIUB