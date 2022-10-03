import { DecoratorFn } from '@storybook/react';

export const decorators: DecoratorFn[] = [(Story) => <Story />];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
