module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.json --noEmit'],
  'packages/clinet-setting/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/clinet-setting/tsconfig.json --noEmit'],
  'packages/clinet-tetris/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/clinet-tetris/tsconfig.json --noEmit'],
  'packages/clinet-todo-list/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/clinet-todo-list/tsconfig.json --noEmit'],
  'packages/common-components/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/common-components/tsconfig.json --noEmit'],
  'packages/common-const/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/common-const/tsconfig.json --noEmit'],
  'packages/common-hooks/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/common-hooks/tsconfig.json --noEmit'],
  'packages/common-styles/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/common-styles/tsconfig.json --noEmit'],
  'packages/common-types/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/common-types/tsconfig.json --noEmit'],
  'packages/common-utils/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/common-utils/tsconfig.json --noEmit'],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write'],
};
