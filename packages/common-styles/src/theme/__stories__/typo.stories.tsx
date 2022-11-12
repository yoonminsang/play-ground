import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { typo } from '../typo';

const Div = styled.div``;

export default {
  title: 'styles/typo',
  component: Div,
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = (args) => <Div {...args} />;

export const Default = () => (
  <>
    {Object.entries(typo).map(([key, value]) => (
      <Template key={key} css={value}>
        {key}
      </Template>
    ))}
  </>
);
