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
  ]
};
