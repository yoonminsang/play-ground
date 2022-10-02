import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const children = 'button';

export const Default = Template.bind({});
Default.args = {
  children,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  variant: 'filled',
  color: 'blue',
  size: 'md',
  children,
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'filled',
  color: 'blue',
  size: 'md',
  children,
  disabled: true,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  variant: 'filled',
  color: 'blue',
  size: 'md',
  children,
  isLoading: true,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: 'filled',
  color: 'blue',
  size: 'md',
  children,
  leftIcon: <div>L</div>,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  variant: 'filled',
  color: 'blue',
  size: 'md',
  children,
  rightIcon: <div>R</div>,
};

export const LeftAndRightIcon = Template.bind({});
LeftAndRightIcon.args = {
  variant: 'filled',
  color: 'blue',
  size: 'md',
  children,
  leftIcon: <div>L</div>,
  rightIcon: <div>R</div>,
};

export const FilledRed = Template.bind({});
FilledRed.args = {
  variant: 'filled',
  color: 'red',
  size: 'md',
  children,
};

export const FilledBlue = Template.bind({});
FilledBlue.args = {
  variant: 'filled',
  color: 'blue',
  size: 'md',
  children,
};

export const FilledGreen = Template.bind({});
FilledGreen.args = {
  variant: 'filled',
  color: 'green',
  size: 'md',
  children,
};

export const FilledGrey = Template.bind({});
FilledGrey.args = {
  variant: 'filled',
  color: 'grey',
  size: 'md',
  children,
};

export const LightRed = Template.bind({});
LightRed.args = {
  variant: 'light',
  color: 'red',
  size: 'md',
  children,
};

export const LightBlue = Template.bind({});
LightBlue.args = {
  variant: 'light',
  color: 'blue',
  size: 'md',
  children,
};

export const LightGreen = Template.bind({});
LightGreen.args = {
  variant: 'light',
  color: 'green',
  size: 'md',
  children,
};

export const LightGrey = Template.bind({});
LightGrey.args = {
  variant: 'filled',
  color: 'grey',
  size: 'md',
  children,
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
  variant: 'outline',
  color: 'red',
  size: 'md',
  children,
};

export const OutlineBlue = Template.bind({});
OutlineBlue.args = {
  variant: 'outline',
  color: 'blue',
  size: 'md',
  children,
};

export const OutlineGreen = Template.bind({});
OutlineGreen.args = {
  variant: 'outline',
  color: 'green',
  size: 'md',
  children,
};

export const OutlineGrey = Template.bind({});
OutlineGrey.args = {
  variant: 'outline',
  color: 'grey',
  size: 'md',
  children,
};

export const SubtleRed = Template.bind({});
SubtleRed.args = {
  variant: 'subtle',
  color: 'red',
  size: 'md',
  children,
};

export const SubtleBlue = Template.bind({});
SubtleBlue.args = {
  variant: 'subtle',
  color: 'blue',
  size: 'md',
  children,
};

export const SubtleGreen = Template.bind({});
SubtleGreen.args = {
  variant: 'subtle',
  color: 'green',
  size: 'md',
  children,
};

export const SubtleGrey = Template.bind({});
SubtleGrey.args = {
  variant: 'subtle',
  color: 'grey',
  size: 'md',
  children,
};

export const Xl = Template.bind({});
Xl.args = {
  variant: 'filled',
  color: 'blue',
  size: 'xl',
  children,
};

export const Lg = Template.bind({});
Lg.args = {
  variant: 'filled',
  color: 'blue',
  size: 'lg',
  children,
};

export const Md = Template.bind({});
Md.args = {
  variant: 'filled',
  color: 'blue',
  size: 'md',
  children,
};

export const Sm = Template.bind({});
Sm.args = {
  variant: 'filled',
  color: 'blue',
  size: 'sm',
  children,
};

export const Xs = Template.bind({});
Xs.args = {
  variant: 'filled',
  color: 'blue',
  size: 'xs',
  children,
};
