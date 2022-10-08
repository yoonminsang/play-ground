import { ComponentMeta, ComponentStory } from '@storybook/react';

import ErrorBoundary from '.';

export default {
  title: 'pages/error-boundary',
  component: ErrorBoundary,
} as ComponentMeta<typeof ErrorBoundary>;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => <ErrorBoundary {...args} />;

export const Default = Template.bind({
  error: Error('error'),
});
