# End-to-End Testing Guide

## Overview
This project includes end-to-end (E2E) tests using Playwright to ensure the dashboard navigation works correctly across different browsers.

## Test Scenarios Covered

### Core Navigation Tests
1. **eCommerce Page Navigation**
   - Clicks eCommerce button in sidebar
   - Verifies URL routing to `/ecommerce`
   - Confirms page label displays "eCommerce"

2. **Order Lists Page Navigation**
   - Clicks Order Lists button in sidebar
   - Verifies URL routing to `/orders`
   - Confirms page label displays "Order List"

## Setup and Installation

### 1. Install Playwright
```bash
npm install
npm run test:install
```

### 2. Run Tests

#### **Recommended for Local Testing** 🚀
```bash
npm run test:e2e:local:headed
```
This command runs tests in headed mode (visible browser) with local environment settings, making it ideal for development and debugging.

#### Other Test Commands

##### Run all E2E tests (headless)
```bash
npm run test:e2e
```

##### Run tests with browser UI
```bash
npm run test:e2e:ui
```

##### Run tests in headed mode (see browser)
```bash
npm run test:e2e:headed
```

##### Run local environment tests
```bash
npm run test:e2e:local          # Headless local tests
npm run test:e2e:local:ui       # Local tests with UI
npm run test:e2e:local:headed   # Local tests in headed mode
```

##### Run specific test file
```bash
npx playwright test tests/e2e/page-navigation.spec.ts
```

## Test Configuration

### Browsers Tested
- ✅ Chromium (Chrome/Edge)
- ✅ Firefox
- ✅ WebKit (Safari)

### Test Environment
- **Base URL**: http://localhost:5173
- **Auto-start**: Development server starts automatically
- **Parallel**: Tests run in parallel for faster execution
- **Retries**: 2 retries in CI environment

## File Structure
```
tests/
├── e2e/
│   └── page-navigation.spec.ts    # Core navigation tests
│                                  # Extended navigation tests
├── playwright.config.ts           # Playwright configuration
└── README-TESTING.md              # This file
```

## Test Data Attributes
Components include `data-testid` attributes for reliable element selection:
- `[data-testid="sidebar"]` - Main sidebar component
- `[data-testid="sidebar-toggle"]` - Sidebar toggle button
- `[data-testid="metrics-cards"]` - eCommerce metrics cards
- `[data-testid="order-table"]` - Order lists table

## Writing New Tests

### Example Test Structure
```typescript
import { test, expect } from '@playwright/test';

test('test description', async ({ page }) => {
  // Navigate to page
  await page.goto('/');

  // Perform actions
  await page.click('button:has-text("Button Text")');

  // Verify results
  await expect(page.locator('h1')).toHaveText('Expected Text');
});
```

### Best Practices
1. **Use `data-testid`** for element selection when possible
2. **Wait for navigation** using `page.waitForURL()`
3. **Use text selectors** for user-facing elements
4. **Add timeout** for elements that take time to load
5. **Verify both URL and content** for navigation tests

## Debugging Tests

### View Test Results
```bash
# Open HTML test report
npx playwright show-report
```

### Debug Specific Test
```bash
# Run single test with debug mode
npx playwright test --debug tests/e2e/page-navigation.spec.ts
```

### Screenshots and Videos
- Screenshots are captured on test failures
- Videos are recorded for debugging
- Traces are available for retried tests

## CI/CD Integration
Tests are configured to run in CI environments with:
- Automatic retries on failure
- Parallel execution disabled in CI
- HTML reports generated for build artifacts

## Troubleshooting

### Common Issues
1. **Port conflicts**: Ensure port 5173 is available
2. **Slow loading**: Increase timeout values if needed
3. **Element not found**: Check if `data-testid` exists on elements
4. **Navigation timing**: Use `waitForLoadState('networkidle')` for SPA routing

### Environment Variables
- `CI=true` - Enables CI-specific settings
- `ENV=local` - Runs tests with local environment configuration (recommended for development)
- `BASE_URL` - Override default base URL if needed

### Quick Start for Developers
For the best local testing experience, use:
```bash
npm run test:e2e:local:headed
```
This command (`ENV=local playwright test --headed`) provides visual feedback and is optimized for local development.