import { ComponentMeta, ComponentStory } from '@storybook/react';

import Custom400 from '.';

export default {
  title: 'pages/400',
  component: Custom400,
} as ComponentMeta<typeof Custom400>;

const Template: ComponentStory<typeof Custom400> = (args) => <Custom400 {...args} />;

export const Default = Template.bind({});
