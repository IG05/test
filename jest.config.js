module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports/junit",
        outputName: "junit.xml"
      }
    ],
    [
      "@casualbot/jest-sonar-reporter",
      {
        outputDirectory: "coverage",
        outputName: "sonar-report.xml",
        relativePaths: true
      }
    ]
  ],
  roots: ["<rootDir>/"],            // adjust if your source code is inside a folder like 'src'
  collectCoverageFrom: [
    "**/*.js",
    "!**/node_modules/**",
    "!**/__tests__/**"
  ]
};
