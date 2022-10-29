import { css } from '@emotion/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

const defaultArgs = {
  // title: 'title',
  title: `그대가 부네요
  내 가슴안에 그대라는 바람이
  언제나 내게 그랬듯이
  내 맘 흔들어 놓고
  추억이라는 흔적만 남기고 달아나죠
  난 길을 잃었죠
  늘 그대라는 사람만 보다가
  단 한 번 의심하지 않고 여기까지 왔는데
  그대없는 낯설은 길 위에 남아있죠`,
  children: (
    <div
      css={css`
        width: fit-content;
      `}
    >
      {/* HOVER_ME */}
      그대가
    </div>
  ),
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const NoArrow = Template.bind({});
NoArrow.args = {
  ...defaultArgs,
  arrow: false,
};

export const MaxWidth500 = Template.bind({});
MaxWidth500.args = {
  ...defaultArgs,
  maxWidth: 500,
};

export const BackgroundColorRed = Template.bind({});
BackgroundColorRed.args = {
  ...defaultArgs,
  backgroundColor: 'red',
};

export const ColorBlue = Template.bind({});
ColorBlue.args = {
  ...defaultArgs,
  color: 'blue',
};

export const PositionTopStart = Template.bind({});
PositionTopStart.args = {
  ...defaultArgs,
  position: 'top-start',
};

export const PositionTop = Template.bind({});
PositionTop.args = {
  ...defaultArgs,
  position: 'top',
};

export const PositionTopEnd = Template.bind({});
PositionTopEnd.args = {
  ...defaultArgs,
  position: 'top-end',
};

export const PositionBottomStart = Template.bind({});
PositionBottomStart.args = {
  ...defaultArgs,
  position: 'bottom-start',
};

export const PositionBottom = Template.bind({});
PositionBottom.args = {
  ...defaultArgs,
  position: 'bottom',
};

export const PositionBottomEnd = Template.bind({});
PositionBottomEnd.args = {
  ...defaultArgs,
  position: 'bottom-end',
};

export const PositionLeftStart = Template.bind({});
PositionLeftStart.args = {
  ...defaultArgs,
  position: 'left-start',
};

export const PositionLeft = Template.bind({});
PositionLeft.args = {
  ...defaultArgs,
  position: 'left',
};

export const PositionLeftEnd = Template.bind({});
PositionLeftEnd.args = {
  ...defaultArgs,
  position: 'left-end',
};

export const PositionRightStart = Template.bind({});
PositionRightStart.args = {
  ...defaultArgs,
  position: 'right-start',
};

export const PositionRight = Template.bind({});
PositionRight.args = {
  ...defaultArgs,
  position: 'right',
};

export const PositionRightEnd = Template.bind({});
PositionRightEnd.args = {
  ...defaultArgs,
  position: 'right-end',
};
