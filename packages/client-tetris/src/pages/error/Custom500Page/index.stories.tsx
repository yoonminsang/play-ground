import { ComponentMeta, ComponentStory } from '@storybook/react';

import Custom500 from '.';

export default {
  title: 'pages/500',
  component: Custom500,
} as ComponentMeta<typeof Custom500>;

const Template: ComponentStory<typeof Custom500> = (args) => <Custom500 {...args} />;

export const Default = Template.bind({});
