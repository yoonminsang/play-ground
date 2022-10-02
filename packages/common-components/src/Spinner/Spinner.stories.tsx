import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const White = Template.bind({});
White.args = {
  color: 'white',
  size: 'md',
};

export const Grey = Template.bind({});
Grey.args = {
  color: 'grey',
  size: 'md',
};

export const Xl = Template.bind({});
Xl.args = {
  size: 'xl',
};

export const Lg = Template.bind({});
Lg.args = {
  size: 'lg',
};

export const Md = Template.bind({});
Md.args = {
  size: 'md',
};

export const Sm = Template.bind({});
Sm.args = {
  size: 'sm',
};

export const Xs = Template.bind({});
Xs.args = {
  size: 'xs',
};
