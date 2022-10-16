module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/../../__mocks__/styleMock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../../__mocks__/fileMock.js',
    '^~(.*)$': '<rootDir>/src/$1',
    '^(assets|components|const|domain|hooks|layout|lib|models|pages|store|types|utils)/(.*)': '<rootDir>/src/$1/$2',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
