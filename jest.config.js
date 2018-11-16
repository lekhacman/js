module.exports = {
    // setupTestFrameworkScriptFile: "./node_modules/jest-enzyme/lib/index.js",
    testPathIgnorePatterns: [".config.js"],
    testMatch: ["**/tests/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"],
    // setupFiles: ["./tests/test.config.js"],
    unmockedModulePathPatterns: []
};
