import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'placeholder',
  size: 'md',
};

export const AsButton = Template.bind({});
AsButton.args = {
  as: 'button',
  size: 'md',
  children: 'button',
};

export const AsSelect = Template.bind({});
AsSelect.args = {
  as: 'select',
  size: 'md',
  children: (
    <>
      <option>1</option>
      <option>2</option>
    </>
  ),
};

export const AsTextArea = Template.bind({});
AsTextArea.args = {
  as: 'textarea',
  size: 'md',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  size: 'md',
};

export const OutLine = Template.bind({});
OutLine.args = {
  variant: 'outline',
  size: 'md',
};

export const BottomLine = Template.bind({});
BottomLine.args = {
  variant: 'bottom-line',
  size: 'md',
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
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
