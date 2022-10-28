import { GlobalStyle, theme } from '@common/styles';
import { ThemeProvider } from '@emotion/react';
import { DecoratorFn } from '@storybook/react';

export const decorators: DecoratorFn[] = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: 'white',
      },
      {
        name: 'black',
        value: 'black',
      },
      {
        name: 'grey',
        value: 'grey',
      },
    ],
  },
};
