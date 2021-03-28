module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    'node_modules'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/out/'
  ]
}
