const path = require("path");

process.env.TZ = "UTC";

module.exports = {
    modulePaths: ["<rootDir>/src"],
    setupFilesAfterEnv: [path.join(__dirname, "setupTests.ts")],
    testEnvironment: "jsdom",
    testMatch: ["**/__tests__/**/*.+(ts|tsx|js)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
};
