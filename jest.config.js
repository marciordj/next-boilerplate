module.exports = {
  testEnviroment: 'jsdom',
  testPathIgnotePatterns: ['/node_modules/', '/.next/'],
  collectCoverageTrue: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
