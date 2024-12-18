# WebDriverIO Test Automation
## This project contains 20 tests using the WebDriverIO Framework.
#### Separate config files were created for Chrome and Firefox browsers.
#### Cross environment variable HEADLESS_STATE sets the headless flag to true or false in defined npm scripts in package.json file.
### Steps to run
#### • Clone the repository using `git clone`
#### • Run command `npm install`
#### • Run the Command `npm run` and Select a Script to Execute:
- **Run all tests**: `test:all`  
  The main config file will be executed in a headed mode, and the **Chrome** browser will run by default.

- **Run a single spec file**: `test:file`  
  The main config file will be executed in a headed mode with the specified spec file (`test.e2e.js`), using the **Chrome** browser by default.

- **Run with Chrome browser**: `test:chrome`  
  The **Chrome** config file will be executed in a headless mode with one spec file (`test.e2e.js`), using the **Chrome** browser.

- **Run with Firefox browser**: `test:firefox`  
  The **Firefox** config file will be executed in a headless mode with one spec file (`test.e2e.js`), using the **Firefox** browser.

- **Run in a Docker container locally**:
  1. Start the Docker container:

     ```bash
     npm run docker:compose:up
     ```

  2. Run the tests with the **Chrome** browser in Docker:

     ```bash
     npm run test:docker:chrome
     ```

  3. Stop the Docker container:

     ```bash
     npm run docker:compose:down
     ```
### Workflow
The pipeline on GitHub Actions, workflow with a ready-made docker image running all tests headless in Chrome: [Workflow](https://github.com/SemeikinaKateryna/task3-webdriverio-telnyx/blob/main/.github/workflows/run-webdriverio-tests-with-allure-report.yml)
### Allure-report
Allure-report was deployed to GitHub Pages. The link to the report is in a description of this repository.
![image](https://github.com/user-attachments/assets/bc7b7d73-6a8b-4178-bafb-e64415fecfb2)
