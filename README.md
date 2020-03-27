# FDC3 Verify

FDC3 Verify is a tool used to verify that a vendor's implementation of the FDC3 APIs follows the spec and behaves as indented. This project is a simple web-based Jasmine test runner that runs BDD unit tests against the `window`'s FDC3 object (`window.fcd3`).

## Motivation

The motivation behind FDC3 Verify is to increase 3rd-party developer confidence in the FDC3 Project by ensuring each vendor's implementation of the spec is verified to work the same across products.

## Contribution

This project can only be as successful as its community involvement and acceptance. We are encouraging discussion, pull requests, and additional tests from anyone in the community.


### Local Development

The project is using [Parcel](https://parceljs.org/) for running the local server and production builds and the local server

1. `npm install` to install the project dependencies
2. `npm run start` to start the local server on port 1234 (http://localhost:1234/index.html)
3. Link the local server to your vendor's environment (Finsemble, Glue42, OpenFin, etc), so the `fdc3` object can be injected into the browser's `window` object.
4. Click on the link to the API endpoint you wish to verify.

### Production Build

1. `npm run build` will build the project
2. The production build of the test runner will be in the `/dist` directory

### Project Structure

#### `/src/` Root

Each test runner is an HTML file on the root of the `/src` directory. The only exception is `index.html` which is a directory of the all the available tests.

#### `/tests`

The unit tests live inside of the `/src/tests` directory. The tests are written against the [Jasmine Behavior-Driven testing framework](https://jasmine.github.io/api/3.5/global).



#### `/js`

The `/js` folder contains our custom application scripts.

#### `/lib`

The `/lib` folder contains code from the [Jasmine 3.5 standalone release](https://github.com/jasmine/jasmine/releases). We aren't using any of their npm modules for this purpose because they are not designed for browser-based test runners.

### `/styles`

Styles used to customize the look and feel of the test runners. Currently, the `fdc3-verify.scss` file is just used to overwrite some default styles provided by the default Jasmine Test runner.

> **Note:** Styles can be written in CSS or SCSS. Additionally, SCSS files can be directly linked on the HTML documents because Parcel will automatically build any files that need to be transpiled.

#### `/mock-objects`

Temporary objects for testing the test runners.

### Adding Additional Tests/Test Runners

#### Tests

New tests can be added directly to the spec.js files. To help with readability on the test runner, it is beneficial to nest like tests together under the same `describe` block.

```javascript
// * Context Method Tests
describe("Context", function() {
  describe("broadcast()", function() {
    it("is defined", function() {
      expect(desktopAgent.broadcast).toBeDefined();
    });
  });
  describe("addIntentListener()", function() {
    it("is defined", function() {
      expect(desktopAgent.addIntentListener).toBeDefined();
    });
  });

  describe("addContextListener()", function() {
    it("is defined", function() {
      expect(desktopAgent.addContextListener).toBeDefined();
    });
  });
});
```

#### Test Runners

Currently, the easiest way to add test runners for additional FDC3 API endpoints is to copy and paste existing html and spec files, rename and modify them, and add the link to the FDC3 Verify homepage.

> **Note:** When adding new tests, ensure that the HTML and test file names are the same (e.g. `desktop-agent.html` and `desktop-agent.spec.js`)