module.exports = {
  transform: { ".*": "<rootDir>/node_modules/jest-css-modules" },
  setupTestFrameworkScriptFile: "<rootDir>/test/jestsetup.js",
  verbose: true,
  testURL: "http://localhost/"
};
