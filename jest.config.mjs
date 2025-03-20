export default {
  bail: true,
  verbose: true,
  rootDir: '.',
  roots: [
    './src'
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageProvider: 'v8',
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(jsx?|mjs?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs']
}
