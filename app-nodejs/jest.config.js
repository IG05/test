module.exports = {
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["lcov", "text"],
  reporters: [
    "default",
    [
      "@casualbot/jest-sonar-reporter",
      {
        outputDirectory: "coverage",
        outputName: "sonar-report.xml",
        relativePaths: true
      }
    ]
  ],
  roots: ["<rootDir>/"],            // or specify your source folder like "src" if you have one
  collectCoverageFrom: [
    "**/*.js",
    "!**/node_modules/**",
    "!**/__tests__/**"
  ]
};
