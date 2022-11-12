import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import { color } from '../color';

const Div = styled.div``;

export default {
  title: 'styles/color',
  component: Div,
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = (args) => <Div {...args} />;

export const Default = () => (
  <>
    {Object.entries(color).map(([key, value]) => (
      <Template key={key} css={{ color: value }}>
        {key}
      </Template>
    ))}
  </>
);

export const Background = () => (
  <div css={{ display: 'grid', gap: '5px', gridTemplateColumns: 'repeat(auto-fill, minmax(25%, auto))' }}>
    {Object.entries(color).map(([key, value]) => (
      <div key={key}>
        <div>{key}</div>
        <Template css={{ backgroundColor: value, width: '200px', height: '200px' }} />
      </div>
    ))}
  </div>
);
