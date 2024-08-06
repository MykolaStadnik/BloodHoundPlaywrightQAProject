# BloodHoundPlaywrightQAProject
## Overview

The BloodHound Playwright QA Project is an automated testing suite for the BloodHound Enterprise application using Playwright. This project includes UI and API tests to ensure the application's functionality and performance meet the expected standards.

## Features

- **UI Tests**: Validates the user interface elements, including page load, menu options, and feature comparison. Tests are written for the https://bloodhoundenterprise.io/ UI, which is also set as a URL in env file.
- **API Tests**: Verifies the correctness of the API responses for breeds and facts services. Tests are written for open API https://dogapi.dog/docs/api-v2.
- **Cross-Platform**: Project support capability to run tests across different browsers, which is configurable via playwright.config.js .

## Prerequisites

- Node.js (version 14 or higher)
- Playwright
- Git

## Getting Started

### Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/MykolaStadnik/BloodHoundPlaywrightQAProject.git
```
Navigate into the project directory:
```cd BloodHoundPlaywrightQAProject```

Running Tests:
```npx playwright test```

To run tests with specific tags (e.g., smoke api,ui), use:
```npx playwright test --grep '@smoke'```

Test reports can be generated and viewed using the following commands:
```npx playwright show-report reports```


